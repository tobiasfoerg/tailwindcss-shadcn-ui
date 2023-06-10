import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		root: "./",
		include: ["**/*.test.ts", "**/*.tests.ts"],
	},
});
