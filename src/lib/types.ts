export type PluginOptions = {
	theme?: Theme;
};
export type Hue = number;
export type Saturation = number;
export type Lightness = number;
export type HslString = `${Hue} ${Saturation}% ${Lightness}%`;
export type HslTuple = [hue: Hue, saturation: Saturation, lightness: Lightness];
export type HslValue = HslString | HslTuple;
export type Radius = string | `${number}rem` | number;

export type Colors = {
	/**
	 * Default backgrounds color of \<body />...etc
	 */
	"--background": HslValue;
	/**
	 * Default foregrounds color of \<body />...etc
	 */
	"--foreground": HslValue;

	/**
	 * Muted backgrounds such as \<TabsList />, \<Skeleton /> and \<Switch />
	 */
	"--muted": HslValue;
	/**
	 * Muted foregrounds such as \<TabsList />, \<Skeleton /> and \<Switch />
	 */
	"--muted-foreground": HslValue;

	"--popover": HslValue;
	"--popover-foreground": HslValue;

	"--card": HslValue;
	"--card-foreground": HslValue;

	"--border": HslValue;
	"--input": HslValue;

	"--primary": HslValue;
	"--primary-foreground": HslValue;

	"--secondary": HslValue;
	"--secondary-foreground": HslValue;

	"--accent": HslValue;
	"--accent-foreground": HslValue;

	"--destructive": HslValue;
	"--destructive-foreground": HslValue;

	"--ring": HslValue;
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
	light: ColorsToCamleCase<Colors>;
	dark: ColorsToCamleCase<Colors>;
};

export type Theme = {
	/**
	 * Default theme
	 */
	":root": ToHslString<Colors> & {
		"--radius": string;
	};
	/**
	 * Dark theme
	 */
	".dark"?: ToHslString<Colors>;
};

export type ToHslString<T> = {
	[P in keyof T]: HslString;
};
