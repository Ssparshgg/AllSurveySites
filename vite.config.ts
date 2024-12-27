import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/AllSurveySites/",
	plugins: [react()],
	optimizeDeps: {
		exclude: ["lucide-react"],
	},
});
