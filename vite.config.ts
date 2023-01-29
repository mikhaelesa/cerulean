import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";
const { EsLinter, linterPlugin } = EsLint;

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
	plugins: [
		react(),
		tsConfigPaths(),
		linterPlugin({
			include: ["./src}/**/*.{ts,tsx}"],
			linters: [new EsLinter({ configEnv })],
		}),
		dts({
			include: ["src/components"],
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "cerulean",
			formats: ["es", "umd"],
			fileName: (format) => `cerulean.${format}.js`,
		},
		rollupOptions: {
			external: [
				...Object.keys(packageJson.peerDependencies),
				...Object.keys(packageJson.dependencies),
			],
		},
	},
}));
