import { Colors, ThemeConfig, Theme, HslString } from "./types";
import { SetOptional } from "type-fest";

export function defineTheme<T extends SetOptional<ThemeConfig, "dark">>(
  config: T
): Theme {
  const { base, dark, light } = config;
  return {
    ":root": {
      "--radius":
        typeof base.radius === "number" ? `${base.radius}px` : base.radius,
      ...colorsToCSSRuleObject(light),
    },
    ...(dark ? { ".dark": colorsToCSSRuleObject(dark) } : {}),
  };
}

function colorsToCSSRuleObject(colors: Colors) {
  return Object.entries(colors).reduce<{ [P in keyof Colors]: HslString }>(
    (agg, [key, value]) => {
      agg[key as keyof Colors] =
        typeof value === "string"
          ? value
          : `${value[0]} ${value[1]}% ${value[2]}%`;
      return agg;
    },
    {} as any
  );
}
