const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: '[id].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.AggressiveSplittingPlugin({
            maxSize: 20
        }),
        new htmlWebpackPlugin({
            filename: 'ready.html'
        })
    ]
}