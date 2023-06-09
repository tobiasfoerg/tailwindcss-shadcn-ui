import { describe, expect, test } from "vitest";
import { defineTheme } from "..";

describe("defineConfig", () => {
	test("convert to css object", () => {
		const result = defineTheme({
			base: {
				radius: 20,
			},
			light: {
				background: [100, 0, 0],
				foreground: [0, 100, 0],
				muted: [0, 0, 100],
				mutedForeground: [100, 100, 0],
				popover: [0, 100, 100],
				popoverForeground: [100, 0, 100],
				card: [100, 100, 100],
				cardForeground: [0, 0, 0],
				border: [0, 0, 0],
				input: [0, 0, 0],
				primary: [0, 0, 0],
				primaryForeground: [0, 0, 0],
				secondary: [0, 0, 0],
				secondaryForeground: [0, 0, 0],
				accent: [0, 0, 0],
				accentForeground: [0, 0, 0],
				destructive: [0, 0, 0],
				destructiveForeground: [0, 0, 0],
				ring: [0, 0, 0],
			},
			dark: {
				background: "100 0% 0%",
				foreground: "0 100% 0%",
				muted: "0 0% 100%",
				mutedForeground: "100 100% 0%",
				popover: "0 100% 100%",
				popoverForeground: "100 0% 100%",
				card: "100 100% 100%",
				cardForeground: "100 0% 0%",
				border: "100 0% 0%",
				input: "100 0% 0%",
				primary: "100 0% 0%",
				primaryForeground: "100 0% 0%",
				secondary: "100 0% 0%",
				secondaryForeground: "100 0% 0%",
				accent: "100 0% 0%",
				accentForeground: "100 0% 0%",
				destructive: "100 0% 0%",
				destructiveForeground: "100 0% 0%",
				ring: "100 0% 0%",
			},
		});

		expect(result).toMatchObject({
			":root": {
				"--background": "100 0% 0%",
				"--foreground": "0 100% 0%",
				"--muted": "0 0% 100%",
				"--muted-foreground": "100 100% 0%",
				"--popover": "0 100% 100%",
				"--popover-foreground": "100 0% 100%",
				"--card": "100 100% 100%",
				"--card-foreground": "0 0% 0%",
				"--border": "0 0% 0%",
				"--input": "0 0% 0%",
				"--primary": "0 0% 0%",
				"--primary-foreground": "0 0% 0%",
				"--secondary": "0 0% 0%",
				"--secondary-foreground": "0 0% 0%",
				"--accent": "0 0% 0%",
				"--accent-foreground": "0 0% 0%",
				"--destructive": "0 0% 0%",
				"--destructive-foreground": "0 0% 0%",
				"--ring": "0 0% 0%",

				"--radius": "20px",
			},

			".dark": {
				"--background": "100 0% 0%",
				"--foreground": "0 100% 0%",
				"--muted": "0 0% 100%",
				"--muted-foreground": "100 100% 0%",
				"--popover": "0 100% 100%",
				"--popover-foreground": "100 0% 100%",
				"--card": "100 100% 100%",
				"--card-foreground": "100 0% 0%",
				"--border": "100 0% 0%",
				"--input": "100 0% 0%",
				"--primary": "100 0% 0%",
				"--primary-foreground": "100 0% 0%",
				"--secondary": "100 0% 0%",
				"--secondary-foreground": "100 0% 0%",
				"--accent": "100 0% 0%",
				"--accent-foreground": "100 0% 0%",
				"--destructive": "100 0% 0%",
				"--destructive-foreground": "100 0% 0%",
				"--ring": "100 0% 0%",
			},
		});
	});

	test("convert to css object light", () => {
		const result = defineTheme({
			base: {
				radius: "2rem",
			},
			light: {
				background: [100, 0, 0],
				foreground: [0, 100, 0],
				muted: [0, 0, 100],
				mutedForeground: [100, 100, 0],
				popover: [0, 100, 100],
				popoverForeground: [100, 0, 100],
				card: [100, 100, 100],
				cardForeground: [0, 0, 0],
				border: [0, 0, 0],
				input: [0, 0, 0],
				primary: [0, 0, 0],
				primaryForeground: [0, 0, 0],
				secondary: [0, 0, 0],
				secondaryForeground: [0, 0, 0],
				accent: [0, 0, 0],
				accentForeground: [0, 0, 0],
				destructive: [0, 0, 0],
				destructiveForeground: [0, 0, 0],
				ring: [0, 0, 0],
			},
		});

		expect(result).toMatchObject({
			":root": {
				"--background": "100 0% 0%",
				"--foreground": "0 100% 0%",
				"--muted": "0 0% 100%",
				"--muted-foreground": "100 100% 0%",
				"--popover": "0 100% 100%",
				"--popover-foreground": "100 0% 100%",
				"--card": "100 100% 100%",
				"--card-foreground": "0 0% 0%",
				"--border": "0 0% 0%",
				"--input": "0 0% 0%",
				"--primary": "0 0% 0%",
				"--primary-foreground": "0 0% 0%",
				"--secondary": "0 0% 0%",
				"--secondary-foreground": "0 0% 0%",
				"--accent": "0 0% 0%",
				"--accent-foreground": "0 0% 0%",
				"--destructive": "0 0% 0%",
				"--destructive-foreground": "0 0% 0%",
				"--ring": "0 0% 0%",

				"--radius": "2rem",
			},
		});
	});
});
