import path from "path";
import postcss from "postcss";
import tailwind, { Config } from "tailwindcss";
import { expect } from "vitest";
import tailwindShadcnUi from "..";

export let css = String.raw;
export let html = String.raw;
export let javascript = String.raw;

export function run(input: string, config: Config, plugin = tailwind) {
	let { currentTestName } = expect.getState();

	config.plugins ??= [];
	if (!config.plugins.includes(tailwindShadcnUi)) {
		config.plugins.push(tailwindShadcnUi);
	}

	return postcss(plugin(config)).process(input, {
		from: `${path.resolve(__filename)}?test=${currentTestName}`,
	});
}
