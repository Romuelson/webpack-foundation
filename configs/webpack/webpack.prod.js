const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            filename: `[name].[contenthash].min.html`,
            minify: {
				collapseWhitespace: true
			}
        })
    ],
    output: {
		filename: `./scripts/[name].[contenthash].min.js`
    }
}
