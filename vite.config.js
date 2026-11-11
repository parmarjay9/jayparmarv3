import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "last updated" date shown in the footer, stamped at build time (Arizona time,
// so a late-night deploy from a UTC build server doesn't show tomorrow's date).
const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Phoenix",
});

export default defineConfig({
  plugins: [react()],
  define: {
    __LAST_UPDATED__: JSON.stringify(LAST_UPDATED),
  },
});
