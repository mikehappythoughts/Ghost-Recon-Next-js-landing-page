const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	// NOTE without the below the out folder will not export your static files. source: https://stackoverflow.com/a/69258517
	images: {
		loader: "imgix",
		path: "/",
	},
	// NOTE fixes the static export link to images issue. Without it none of your css, images etc will be found
	assetPrefix: ".",
};
