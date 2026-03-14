import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "register-api",
      configureServer(server) {
        server.middlewares.use("/api/register", async (req, res, next) => {
          if (req.method !== "POST") return next();
          let body = "";
          req.on("data", (chunk) => (body += chunk));
          req.on("end", async () => {
            res.setHeader("Content-Type", "application/json");
            try {
              const data = JSON.parse(body || "{}");
              const { sendRegistrationEmail } = await import(
                "./server/sendRegistrationEmail.js"
              );
              await sendRegistrationEmail(data);
              res.statusCode = 200;
              res.end(JSON.stringify({ ok: true }));
            } catch (err) {
              res.statusCode = 500;
              res.end(
                JSON.stringify({
                  error: err instanceof Error ? err.message : String(err),
                })
              );
            }
          });
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
