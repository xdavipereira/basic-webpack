 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");


 module.exports = {
     entry: './app/index.js',
     output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist')
     },
     module: {
         rules: [{
             test: /\.scss$/,
             use: ExtractTextPlugin.extract({
                 fallback: "style-loader",
                 use: ['css-loader', 'sass-loader'],
                 publicPath: '/dist'
             })
         }]
     },
     devServer: {
         contentBase: path.join(__dirname, "dist"),
         compress: true,
         port: 3000,
         stats: 'errors-only',
         open: true
     },
     plugins: [
         new HtmlWebpackPlugin({
             //  minify: {
             //      collapseWhitespace: true
             //  },
             hash: true
         }),
         new ExtractTextPlugin({
             filename: 'app.css',
             disable: false,
             allChunks: true
         })
     ]

 };
