import { SetOptional } from "type-fest";
import { Colors, ColorsToCamleCase, HslString, HslValue, Theme, ThemeConfig, ToHslString } from "./types";

export function defineTheme<T extends SetOptional<ThemeConfig, "dark">>(config: T): Theme {
	const { base, dark, light } = config;
	return {
		":root": {
			"--radius": typeof base.radius === "number" ? `${base.radius}px` : base.radius,
			...colorsToCSSRuleObject(light),
		},
		...(dark ? { ".dark": colorsToCSSRuleObject(dark) } : {}),
	};
}

function colorsToCSSRuleObject(colors: ColorsToCamleCase<Colors>): ToHslString<Colors> {
	return {
		"--background": toHslString(colors.background),
		"--foreground": toHslString(colors.foreground),
		"--muted": toHslString(colors.muted),
		"--muted-foreground": toHslString(colors.mutedForeground),
		"--popover": toHslString(colors.popover),
		"--popover-foreground": toHslString(colors.popoverForeground),
		"--card": toHslString(colors.card),
		"--card-foreground": toHslString(colors.cardForeground),
		"--border": toHslString(colors.border),
		"--input": toHslString(colors.input),
		"--primary": toHslString(colors.primary),
		"--primary-foreground": toHslString(colors.primaryForeground),
		"--secondary": toHslString(colors.secondary),
		"--secondary-foreground": toHslString(colors.secondaryForeground),
		"--accent": toHslString(colors.accent),
		"--accent-foreground": toHslString(colors.accentForeground),
		"--destructive": toHslString(colors.destructive),
		"--destructive-foreground": toHslString(colors.destructiveForeground),
		"--ring": toHslString(colors.ring),
	};
}

function toHslString(value: HslValue): HslString {
	return typeof value === "string" ? value : `${value[0]} ${value[1]}% ${value[2]}%`;
}
