const infernal = require("prettier-config-infernal");

module.exports = {
	...infernal,
	plugins: ["@trivago/prettier-plugin-sort-imports"],
	importOrder: ["^[./]"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};
