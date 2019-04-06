// import path from 'path';

const webpack = require('webpack');
const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(process.env['NODE_ENV']);
function extractSass (){
    return new ExtractTextPlugin({
        filename: "[name].[hash].css",
        allChunks: true
    });
};

var plugins = [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    extractSass(),
    // new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),
    new TsConfigPathsPlugin.CheckerPlugin(),
]

if(process.env['NODE_ENV'] === 'dev'){
    // plugins.push(new webpack.HotModuleReplacementPlugin())
}else{
    plugins.unshift(new CleanWebpackPlugin(['dist']))
}

module.exports = {
    mode: 'development',
    entry: "./src/App.tsx",
    module:{
        rules: [{
        //     test: /\.tsx$/,
        //     exclude: /node_modules/,
        //     use: [{
        //         loader: 'awesome-typescript-loader',
        //         options: {
        //             cacheDirectory:true
        //         }
        //     }]
        // },{
            test: /\.(jsx|tsx)$/,
            exclude: /node_modules/,
            use: [
                // 'react-hot-loader/webpack',
                'babel-loader',
                // 'awesome-typescript-loader'
            ]
        },{
            test: /\.css$/,
            use: [
                'style-loader', 
                { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[folder]__[local]__[hash:base64:5]' } },
                {
                    loader: 'postcss-loader',
                    options: { 
                        sourceMap: true,
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('autoprefixer')()
                        ]
                     }
                }
            ]
        },{
            test: /\.(scss)$/,
            exclude: '/node_modules/',
            use: ExtractTextPlugin.extract({
                fallback: [{
                    loader: 'style-loader',
                }],
                use: [
                    {
                      loader: 'css-loader',
                      options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 2,
                            localIdentName: '[folder]__[local]__[hash:base64:5]'
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true,
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                         }
                    },
                    'sass-loader'
                ]
            })
        },{
            test: /\.(png|jpg|gif|svg)$/i,
            use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name:'images/[name]-[hash:8].[ext]'
                }
            }
            ]
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