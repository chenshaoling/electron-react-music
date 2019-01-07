// import path from 'path';

const webpack = require('webpack');
const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
        }]
    },
    output: {
        path: path.join(__dirname, 'dist/')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx'],
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