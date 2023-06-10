# tailwindcss-shadcn-ui

<p align="center">
  <a href="https://www.npmjs.com/package/tailwindcss-shadcn-ui">
    <img alt="NPM Version" src="https://badgen.net/npm/v/tailwindcss-shadcn-ui" />
  </a>
  <a href="https://www.npmjs.com/package/tailwindcss-shadcn-ui">
    <img alt="Types Included" src="https://badgen.net/npm/types/tailwindcss-shadcn-ui" />
  </a>
  <a href="https://bundlephobia.com/result?p=tailwindcss-shadcn-ui">
    <img alt="Minizipped Size" src="https://img.shields.io/bundlephobia/minzip/tailwindcss-shadcn-ui" />
  </a>
  <a href="https://github.com/tobiasfoerg/tailwindcss-shadcn-ui/blob/main/LICENSE">
    <img alt="Apache-2.0 License" src="https://badgen.net/github/license/tobiasfoerg/tailwindcss-shadcn-ui" />
  </a>
  <a href="https://www.npmjs.com/package/tailwindcss-shadcn-ui">
    <img alt="NPM Downloads" src="https://badgen.net/npm/dm/tailwindcss-shadcn-ui" />
  </a>
</p>
<hr/>

A plugin for Tailwind CSS v3.2+ that provides base utilities for shadcn ui.

## Installation

Install the plugin  
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

Add the plugin to your `tailwind.config.{js|ts}` file.

```typescript
// tailwind.config.ts

import tailwindShadcnUi from "tailwindcss-shadcn-ui";

export default {
	// ...
	plugins: [
		// ...
		tailwindShadcnUi,
	],
};
```

```javascript
// tailwind.config.js

module.exports = {
	// ...
	plugins: [
		// ...
		require("tailwindcss-shadcn-ui"),
	],
};
```

This will add the plugin with the default theme. You can alternativly use one of the theme presets or create your own theme.

### Theme presets

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

#### Available presets

| Preset  | Files                                        |
| ------- | -------------------------------------------- |
| DEFAULT | [themes/default.ts](./src/themes/default.ts) |

### Define your own theme

```typescript
// tailwind.config.ts

import tailwindShadcnUi, { defineTheme } from "tailwindcss-shadcn-ui";

export default {
	// ...
	plugins: [
		// ...
		tailwindShadcnUi({
			theme: defineTheme({
				base: {
					radius: "2rem", // string|number(pixels)
				},
				light: {
					background: "0 0% 0%", // `${number} ${number}% ${number}%`
					foreground: [0, 0, 0], // [hue: number, saturation: number, lightness: number]
					//...
				},
				dark: {
					// ...
				},
			}),
		}),
	],
};
```
