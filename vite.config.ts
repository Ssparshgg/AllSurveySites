import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	// Change this to match your deployment URL path
	base: "/", // Use "/" if deploying to root domain
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
});
