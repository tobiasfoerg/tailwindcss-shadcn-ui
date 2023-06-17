import { SetOptional } from "type-fest";
import {
	ColorsToCamleCase,
	HexString,
	HslString,
	HslTuple,
	Theme,
	ThemeColors,
	ThemeConfig,
	ToHslString,
} from "./types";

export function defineTheme<T extends SetOptional<ThemeConfig, "dark">>(config: T): Theme {
	const { base = {}, dark, light } = config;
	return {
		":root": {
			"--radius": base.radius ? (typeof base.radius === "number" ? `${base.radius}px` : base.radius) : "0",
			...(base.fontFamily
				? { "--font-sans": Array.isArray(base.fontFamily) ? base.fontFamily.join(", ") : base.fontFamily }
				: {}),
			...toCSSRuleObject(light),
		},
		...(dark ? { ".dark": toCSSRuleObject(dark) } : {}),
	};
}

function toCSSRuleObject(colors: ColorsToCamleCase<ThemeColors>): ToHslString<ThemeColors> {
	return Object.entries(colors).reduce<ToHslString<ThemeColors>>((agg, [key, value]) => {
		let color: HslString;
		if (typeof value === "string") {
			if (isHexColor(value)) {
				color = hslToSting(rgbToHsl(value));
			} else if (isHslColor(value)) {
				color = value;
			} else {
				throw new Error(`Invalid color value: ${value}`);
			}
		} else {
			color = `${value[0]} ${value[1]}% ${value[2]}%`;
		}
		agg[("--" + key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)) as keyof ToHslString<ThemeColors>] =
			color;
		return agg;
	}, {} as any);
}

function isHexColor(value: string): value is HexString {
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
}

function isHslColor(value: string): value is HslString {
	return /^\d{1,3}\s\d{1,3}%\s\d{1,3}%\)$/.test(value);
}

function hslToSting(value: HslTuple): HslString {
	return `${value[0]} ${value[1]}% ${value[2]}%`;
}

function rgbToHsl(hex: HexString): HslTuple {
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
