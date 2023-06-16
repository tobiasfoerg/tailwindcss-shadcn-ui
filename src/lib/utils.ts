import { SetOptional } from "type-fest";
import { ColorsToCamleCase, HslString, HslTuple, Theme, ThemeColors, ThemeConfig, ToHslString } from "./types";

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

function toCSSRuleObject(colors: ColorsToCamleCase<ThemeColors>): ToHslString<ThemeColors> {
	return Object.entries(colors).reduce<ToHslString<ThemeColors>>((agg, [key, value]) => {
		agg[("--" + key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)) as keyof ToHslString<ThemeColors>] =
			typeof value === "string"
				? /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)
					? hslToSting(rgbToHsl(value))
					: (value as HslString)
				: `${value[0]} ${value[1]}% ${value[2]}%`;
		return agg;
	}, {} as any);
}

function hslToSting(value: HslTuple): HslString {
	return `${value[0]} ${value[1]}% ${value[2]}%`;
}

function rgbToHsl(hex: string): HslTuple {
	const r = parseInt(hex.substring(1, 3), 16) / 255;
	const g = parseInt(hex.substring(3, 5), 16) / 255;
	const b = parseInt(hex.substring(5, 7), 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	let l = (max + min) / 2;

	if (max === min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return [h, s * 360, l * 360];
}
