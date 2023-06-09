import { SetOptional } from "type-fest";
import { Colors, ColorsToCamleCase, Theme, ThemeConfig, ToHslString } from "./types";

export function defineTheme<T extends SetOptional<ThemeConfig, "dark">>(config: T): Theme {
	const { base, dark, light } = config;
	return {
		":root": {
			"--radius": typeof base.radius === "number" ? `${base.radius}px` : base.radius,
			...toCSSRuleObject(light),
		},
		...(dark ? { ".dark": toCSSRuleObject(dark) } : {}),
	};
}

function toCSSRuleObject(colors: ColorsToCamleCase<Colors>): ToHslString<Colors> {
	return Object.entries(colors).reduce<ToHslString<Colors>>((agg, [key, value]) => {
		agg[("--" + key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)) as keyof ToHslString<Colors>] =
			typeof value === "string" ? value : `${value[0]} ${value[1]}% ${value[2]}%`;
		return agg;
	}, {} as any);
}
