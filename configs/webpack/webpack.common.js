const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = {
    entry: {
        index: './src/index.js'
    },
    plugins: [
		new webpack.DefinePlugin(envKeys)
	],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        pathinfo: false
    },
    resolve: {
		extensions: ["", ".js", ".json"]
	},
    devtool: false,
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}
