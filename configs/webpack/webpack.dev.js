const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: `[name].html`,
            template: './public/index.html'
        })
    ],
    output: {
		filename: `./scripts/[name].js`
    }
}
