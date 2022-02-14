const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        path: path.resolve(__dirname, '../../dist'),
        clean: true,
        pathinfo: false
    },
    resolve: {
		extensions: ['', '.js', '.json']
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
    },
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    'postcss-preset-env', {}
                                ]
                            ]
                        }
                    }
                },
                'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
