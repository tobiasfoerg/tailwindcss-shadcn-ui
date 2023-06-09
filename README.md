# tailwindcss-shadcn-ui

<p align="center">
  <a href="https://www.npmjs.com/package/tailwindcss-shadcn-ui">
    <img alt="NPM Version" src="https://badgen.net/npm/v/tailwindcss-shadcn-ui" />
  </a>
  <a href="https://www.npmjs.com/package/tailwindcss-shadcn-ui">
    <img alt="Types Included" src="https://badgen.net/npm/types/tailwindcss-shadcn-ui" />
  </a>
  <a href="https://github.com/tobiasfoerg/tailwindcss-shadcn-ui/blob/main/LICENSE">
    <img alt="Apache-2.0 License" src="https://badgen.net/github/license/tobiasfoerg/tailwindcss-shadcn-ui" />
  </a>
  <a href="https://www.npmjs.com/package/tailwindcss-shadcn-ui">
    <img alt="NPM Downloads" src="https://badgen.net/npm/dm/tailwindcss-shadcn-ui" />
  </a>
</p>
<hr/>

A plugin/preset for Tailwind CSS v3.2+ that provides base utilities for shadcn ui.

## Installation

This plugin requires `tailwindcss` and `tailwindcss-animate`

**npm**

```sh
npm install tailwindcss-shadcn-ui --save-dev
```

**yarn**

```sh
yarn install -D tailwindcss-shadcn-ui
```

**pnpm**

```sh
pnpm add -D tailwindcss-shadcn-ui
```

## Configuration

### Recommend

Add the shadcn preset to your tailwind config file unsing the preset creator function.

> With this approach we can get a full configured preset including `tailwindcss-animate` plugin and dark mode set to class. Shoutout to [@simonswiss](https://twitter.com/simonswiss). He metioned the preset way in his video.

```ts
// tailwind.config.ts
import { type Config } from "tailwindcss";
import { createPreset } from "tailwindcss-shadcn-ui";

export default {
    presets: [createPreset()],
    // ...
} satisfies Config;
```

### Alternative

With this approach we can not preconfigure the plugins to include the `tailwindcss-animate` plugin. So you have to include it yourself.

<details>
  <summary>Using the plugin.</summary>

```ts
// tailwind.config.ts
import { type Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
import tailwindShadcnUi from "tailwindcss-shadcn-ui";

export default {
    darkMode: ["class"],
    // ...
    plugins: [
        // ...
        tailwindShadcnUi,
        tailwindAnimate,
    ],
} satisfies Config;
```

</details>

## Theme presets

```typescript
// tailwind.config.ts
import { createPreset } from "tailwindcss-shadcn-ui";
import { DEFAULT } from "tailwindcss-shadcn-ui/themes";

export default {
    presets: [createPreset({ theme: DEFAULT })],
    // ..
};
```

<details>
  <summary>Plugin and theme.</summary>

```typescript
// tailwind.config.ts
import tailwindShadcnUi from "tailwindcss-shadcn-ui";
import { DEFAULT } from "tailwindcss-shadcn-ui/themes";

export default {
    // ...
    plugins: [
        // ...
        tailwindShadcnUi({
            theme: DEFAULT,
        }),
    ],
};
```

</details>

### Available presets

| Preset  | Files                                        |
| ------- | -------------------------------------------- |
| DEFAULT | [themes/default.ts](./src/themes/default.ts) |

### Define your own theme

```typescript
// tailwind.config.ts

import { createPreset, defineTheme } from "tailwindcss-shadcn-ui";
import { DEFAULT } from "tailwindcss-shadcn-ui/themes";

export default {
    presets: [
        createPreset({
            theme: defineTheme({
                base: {
                    radius: "2rem", // string|number(pixels),
                    fontFamily: "Inter", // string|string[]
                },
                light: {
                    background: "0 0% 0%", // `${number} ${number}% ${number}%`
                    foreground: [0, 0, 0], // [hue: number, saturation: number, lightness: number]
                    //...
                },
                dark: {
                    background: "#000000", // `#${string}`
                    // ...
                },
            }),
        }),
    ],
    // ..
};

export default {
    // ...
    plugins: [
        // ...
        tailwindShadcnUi({
            theme: defineTheme({
                // ..
            }),
        }),
    ],
};
```

### The result

the preset adds following tailwind config.

```typescript
export default {
    plugins: [tailwindAnimate],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            colors: {
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                primary: {
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
                    foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
                    foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted) / <alpha-value>)",
                    foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent) / <alpha-value>)",
                    foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover) / <alpha-value>)",
                    foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
                },
                card: {
                    DEFAULT: "hsl(var(--card) / <alpha-value>)",
                    foreground: "hsl(var(--card-foreground) / <alpha-value>)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
};
```

The plugin adds following base styles with values based on your configured theme.

```css
:root {
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
    --font-sans: Inter;
}

.dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
}

* {
    @apply border-border;
}

body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
}
```
