const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            filename: `[name].[contenthash].min.html`,
            minify: {
				collapseWhitespace: true
			}
        }),
        new MiniCssExtractPlugin({
			filename: `./styles/[name].[contenthash].min.css`,
			chunkFilename: `styles/[id].[contenthash].min.css`
        })
    ],
    output: {
		filename: `./scripts/[name].[contenthash].min.js`
    }
}
