const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
    entry: [
        'babel-polyfill', './src/index.js'
    ],
    output: {
        filename: 'index.js',
        path: path.resolve('../static'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed)
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}