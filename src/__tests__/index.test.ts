import { describe, expect, test } from "vitest";
import { css, html, run } from "./run";

describe("plugin", () => {
	test("#1", async () => {
		const config = {
			content: [
				{
					raw: html``,
				},
			],
		};

		const input = css`
			@tailwind base;
		`;

		const result = await run(input, config);

		expect(result.css).toContain(`* {
  border-color: hsl(var(--border) / <alpha-value>);
}`);

		expect(result.css).toContain(`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 47.4% 11.2%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 47.4% 11.2%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 100% 50%;
  --destructive-foreground: 210 40% 98%;
  --ring: 215 20.2% 65.1%;
  --radius: 0.5rem;
}`);
	});
});
