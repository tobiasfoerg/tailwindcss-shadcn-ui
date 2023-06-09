/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
	printWidth: 120,
	useTabs: true,
	tabWidth: 4,
	singleQuote: false,
	importOrderParserPlugins: ["typescript"],
	importOrderTypeScriptVersion: "5.0.0",
	plugins: ["prettier-plugin-packagejson", "@ianvs/prettier-plugin-sort-imports"],
};

module.exports = config;
