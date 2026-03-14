import "dotenv/config";
import { Resend } from "resend";

/**
 * Sends registration form data to admin email via Resend.
 * Loads RESEND_API_KEY, ADMIN_EMAIL, RESEND_FROM_EMAIL from process.env.
 * @param {{
 *   fullName: string;
 *   email: string;
 *   phone: string;
 *   dateOfBirth: string;
 *   country: string;
 *   address: string;
 *   city: string;
 *   zipCode: string;
 *   imageBase64?: string;
 *   imageFilename?: string;
 * }} data
 */
export async function sendRegistrationEmail(data) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !adminEmail) {
    throw new Error(
      "Missing RESEND_API_KEY or ADMIN_EMAIL in environment. Add them to .env"
    );
  }

  const resend = new Resend(apiKey);

  const attachments = [];
  if (data.imageBase64 && data.imageFilename) {
    attachments.push({
      filename: data.imageFilename,
      content: Buffer.from(data.imageBase64, "base64"),
    });
  }

  const passportStatus = attachments.length
    ? `Attached (${escapeHtml(data.imageFilename)}) – see attachment below`
    : "Not provided";

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Registration</title></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #1a1a1a;">New registration submitted</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Full Name</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.fullName || "—")}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.email || "—")}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.phone || "—")}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Date of Birth</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.dateOfBirth || "—")}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Country</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.country || "—")}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Address</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.address || "—")}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>City</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.city || "—")}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>ZIP / Postal Code</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.zipCode || "—")}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Passport / ID upload</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${passportStatus}</td></tr>
  </table>
  ${attachments.length ? '<p style="margin-top: 16px;"><strong>Passport/ID image</strong> is attached to this email.</p>' : ""}
</body>
</html>
  `.trim();

  const payload = {
    from: fromEmail,
    to: [adminEmail],
    subject: `New registration: ${data.fullName || "Unknown"}`,
    html,
  };
  if (attachments.length) payload.attachments = attachments;

  const { error } = await resend.emails.send(payload);
  if (error) throw new Error(error.message);
  console.log("[Register] Email sent for registration:", data.email);
}

function escapeHtml(str) {
  if (str == null) return "—";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
