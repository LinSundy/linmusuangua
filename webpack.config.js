const path = require('path');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    }
}