// import path from 'path';

const webpack = require('webpack');
const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(process.env['NODE_ENV']);
const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css"
});

var plugins = [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    extractSass,
    // new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),
    new TsConfigPathsPlugin.CheckerPlugin(),
]

if(process.env['NODE_ENV'] === 'dev'){
    plugins.push(new webpack.HotModuleReplacementPlugin())
}else{
    plugins.unshift(new CleanWebpackPlugin(['dist']))
}

module.exports = {
    mode: 'development',
    entry: "./src/App.tsx",
    module:{
        rules: [{
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    cacheDirectory:true
                }
            }]
        },{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory:true
                }
            }]
        },{
            test: /\.css$/,
            use: [
                'style-loader/url',
                { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
                'postcss-loader'
            ]
        },{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            })
                // test: /\.scss$/,
                // use: extractSass.extract({
                //     use: [{
                //         loader: "style-loader"
                //     },  {
                //         loader: 'typings-for-css-modules-loader',
                //         options: {
                //             modules: true,
                //             namedExport: true,
                //             camelCase: true,
                //             minimize: true,
                //             localIdentName: "[local]_[hash:base64:5]"
                //         }
                //     }, {
                //         loader: "sass-loader"
                // }]
            // })  
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx', '.scss'],
        modules: [
          path.resolve(__dirname, 'dist/'),
          'node_modules',
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9002
    },
    plugins: plugins
}