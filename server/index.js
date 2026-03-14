/**
 * Production server: serves static build and POST /api/register (Resend).
 * Run with: RESEND_API_KEY=re_xxx ADMIN_EMAIL=admin@example.com node server/index.js
 * Optional: RESEND_FROM_EMAIL= noreply@yourdomain.com
 */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sendRegistrationEmail } from "./sendRegistrationEmail.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "../dist")));

app.post("/api/register", async (req, res) => {
  try {
    await sendRegistrationEmail(req.body);
    res.json({ ok: true });
  } catch (err) {
    res
      .status(500)
      .json({
        error: err instanceof Error ? err.message : String(err),
      });
  }
});

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});