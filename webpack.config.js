const path = require('path');

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'babel-loader'}
                ]
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'json-loader' }
                ]
            }
        ]
    }
}

module.exports = config;