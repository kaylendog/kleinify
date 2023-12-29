module.exports = {
	extends: "infernal",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
	},
};
