import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: ["./src/themes/index.ts"],
		outDir: "dist/themes",
		target: "esnext",
		clean: true,
		dts: true,
		format: ["esm", "cjs"],
		external: ["../index"],
	},
	{
		entry: ["./src/index.ts"],
		outDir: "dist",
		target: "esnext",
		clean: true,
		dts: true,
		format: ["esm", "cjs"],
		external: ["tailwindcss", "tailwindcss-animate", "./themes"],
	},
]);
