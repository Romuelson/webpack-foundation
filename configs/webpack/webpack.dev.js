const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: `[name].html`,
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
			filename: `./styles/[name].css`,
			chunkFilename: `styles/[id].css`
        })
    ],
    output: {
		filename: `./scripts/[name].js`
    }
}
