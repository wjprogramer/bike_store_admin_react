var path = require('path');
var webpack = require('webpack');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CircularDependencyPlugin = require('circular-dependency-plugin');
var ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

var config = require('./../config');

var BASE_PATH = process.env.BASE_PATH || '/';

console.log("[JAY] BASE_PATH: ", BASE_PATH);

module.exports = {
    entry: path.join(config.srcDir, 'index.js'),
    output: {
        path: config.distDir,
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: BASE_PATH,
    },
    // old
    // output: {
    //     filename: '[name].bundle.js',
    //     chunkFilename: '[name].chunk.js',
    //     path: config.distDir,
    //     publicPath: BASE_PATH,

    //     // 有作用?
    //     // library: 'someLibName',
    //     // libraryTarget: 'umd',
    //     // filename: 'someLibName.js',
    //     // auxiliaryComment: 'Test Comment',
    // },
    devServer: {
        // hot: true, // 預設是 true
        // contentBase: config.serveDir,
        compress: true, // 在生產環境下記得改成 true
        historyApiFallback: {
            index: BASE_PATH
        },
        host: '0.0.0.0',
        port: 8891,
    },
    name: 'client',
    // devtool: 'cheap-eval-source-map',
    target: 'web',
    mode: 'development',
    resolve: {
        extensions: ['*', '.js'],
        modules: [
            'node_modules',
            config.srcDir
        ],
        // 筆記：
        // webpack < 5 used to include polyfills for node.js core modules by default.
        // This is no longer the case. Verify if you need this module and configure a polyfill for it.
        // https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
        // https://sanchit3b.medium.com/how-to-polyfill-node-core-modules-in-webpack-5-905c1f5504a0
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": require.resolve("path-browserify"),
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": require.resolve('crypto-browserify'),
        } 
    },
    plugins: [
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        }),
        new HtmlWebpackPlugin({
            template: config.srcHtmlLayout,
            inject: false,
            chunksSortMode: 'none',
            minify: {
                removeComments: true,
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.BASE_PATH': JSON.stringify(BASE_PATH),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractCssChunks(),
        new NodePolyfillPlugin(),
    ],
    optimization: {
        moduleIds: 'named',
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                ],
                use: 'babel-loader'
            },
            // Modular Styles
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    'sass-loader',
                    { loader: 'postcss-loader' }
                ],
                exclude: [path.resolve(config.srcDir, 'styles')],
                include: [config.srcDir]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    { loader: 'postcss-loader' },
                    {
                        loader: 'sass-loader',
                        // options: {
                        //     includePaths: config.scssIncludes
                        // }
                    }
                ],
                exclude: [path.resolve(config.srcDir, 'styles')],
                include: [config.srcDir]
            },
            // Global Styles
            {
                test: /\.css$/,
                use: [
                    ExtractCssChunks.loader,
                    'css-loader',
                    'postcss-loader'
                ],
                include: [path.resolve(config.srcDir, 'styles')]
            },
            {
                test: /\.scss$/,
                use: [
                    ExtractCssChunks.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        // options: {
                        //     includePaths: config.scssIncludes
                        // }
                    }
                ],
                include: [path.resolve(config.srcDir, 'styles')]
            },
            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                }
            },
            // Files
            {
                test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
                loader: "file-loader",
                options: {
                    name: "static/[name].[ext]",
                    // prefix: "static/",
                    // outputPath: 'static',
                }
            }
        ]
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
}