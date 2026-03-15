/**
 * Production server: serves static build and POST /api/register (Resend).
 * Run with: RESEND_API_KEY=re_xxx ADMIN_EMAIL=admin@example.com node server/index.js
 * Optional: RESEND_FROM_EMAIL= noreply@yourdomain.com
 *
 * IMPORTANT: Always run `npm run build` before starting. This server must serve
 * the contents of the `dist/` folder only. If you deploy elsewhere (Nginx, S3,
 * Vercel, Netlify), set the publish/root directory to `dist` and ensure .js
 * files are served with Content-Type: application/javascript (or you'll see
 * "Expected a JavaScript module but server responded with MIME type
 * application/octet-stream").
 */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sendRegistrationEmail } from "./sendRegistrationEmail.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json({ limit: "10mb" }));

// Ensure correct MIME types for module scripts (avoids "application/octet-stream" errors)
app.use(
  express.static(path.join(__dirname, "../dist"), {
    setHeaders: (res, filePath) => {
      const ext = path.extname(filePath);
      if (ext === ".js" || ext === ".mjs") {
        res.setHeader("Content-Type", "application/javascript; charset=UTF-8");
      } else if (ext === ".css") {
        res.setHeader("Content-Type", "text/css; charset=UTF-8");
      }
    },
  })
);

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