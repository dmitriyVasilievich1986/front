const path = require('path')

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
    module: {
        rules: [
            {
                test: /\.js$/,
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