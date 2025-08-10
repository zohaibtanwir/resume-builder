import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const APP_DIRECTORY_ALIAS = path.resolve(__dirname, "src/app");

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@app": APP_DIRECTORY_ALIAS
		}
	}
});
