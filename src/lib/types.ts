export type PluginOptions = {
	theme?: Theme;
};
export type Hue = number;
export type Saturation = number;
export type Lightness = number;
export type HexString = `#${string}`;
export type HslString = `${Hue} ${Saturation}% ${Lightness}%`;
export type HslTuple = [hue: Hue, saturation: Saturation, lightness: Lightness];
export type CssColor = HslString | HslTuple | HexString;
export type Radius = string | `${number}rem` | number;

export type ThemeColors = {
	/**
	 * Default backgrounds color of \<body />...etc
	 */
	"--background": CssColor;
	/**
	 * Default foregrounds color of \<body />...etc
	 */
	"--foreground": CssColor;

	/**
	 * Muted backgrounds such as \<TabsList />, \<Skeleton /> and \<Switch />
	 */
	"--muted": CssColor;
	/**
	 * Muted foregrounds such as \<TabsList />, \<Skeleton /> and \<Switch />
	 */
	"--muted-foreground": CssColor;

	"--popover": CssColor;
	"--popover-foreground": CssColor;

	"--card": CssColor;
	"--card-foreground": CssColor;

	"--border": CssColor;
	"--input": CssColor;

	"--primary": CssColor;
	"--primary-foreground": CssColor;

	"--secondary": CssColor;
	"--secondary-foreground": CssColor;

	"--accent": CssColor;
	"--accent-foreground": CssColor;

	"--destructive": CssColor;
	"--destructive-foreground": CssColor;

	"--ring": CssColor;
};

type ConvertKey<S extends string> = S extends `--${infer T}-${infer U}`
	? `${T}${Capitalize<ConvertKey<U>>}`
	: S extends `--${infer T}`
	? T
	: S;

export type ColorsToCamleCase<T> = T extends object
	? {
			[P in keyof T as ConvertKey<P & string>]: T[P];
	  }
	: T;

export type ThemeConfig = {
	base: {
		radius: Radius;
	};
	light: ColorsToCamleCase<ThemeColors>;
	dark: ColorsToCamleCase<ThemeColors>;
};

export type Theme = {
	/**
	 * Default theme
	 */
	":root": ToHslString<ThemeColors> & {
		"--radius": string;
	};
	/**
	 * Dark theme
	 */
	".dark"?: ToHslString<ThemeColors>;
};

export type ToHslString<T> = {
	[P in keyof T]: HslString;
};
