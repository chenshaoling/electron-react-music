// import path from 'path';

const webpack = require('webpack');
const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(process.env['NODE_ENV']);

var plugins = [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    
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
            exclude: path.resolve(__dirname, 'dist'),
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]__[hash:base64:5]'
                    }
                },
                'postcss-loader']
            })
        },{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true,
                        importLoader: 1,
                        localIdentName: '[name]__[local]__[hash:base64:5]'
                    }
                },
                'sass-loader']
            })
        }]
    },
    output: {
        path: path.join(__dirname, 'dist/')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx', 'scss'],
        modules: [
          path.join(__dirname, 'dist/'),
          'node_modules',
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9002
    },
    plugins: plugins
}