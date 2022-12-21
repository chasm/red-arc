import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		include: ["src/**/*.test.ts"],
		coverage: {
			all: true,
			exclude: [
				"src/constants.ts",
				"src/types.ts",
				"src/env.d.ts",
				"src/**/*.test.ts",
			],
			include: ["src/**/*.ts"],
			reporter: ["text", "text-summary", "json", "html"],
		},
	},
})
