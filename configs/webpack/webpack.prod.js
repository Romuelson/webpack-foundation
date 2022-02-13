const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}
