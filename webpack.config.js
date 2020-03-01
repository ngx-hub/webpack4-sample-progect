const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
    entry: './src/index.js',
    output: {
        // path: './dist/', -> The output directory as **absolute path** (required).
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/' // относительная ссылка на данный файл, которая будет подставлятся из браузера
    },
    devServer: {
        overlay: true,  // show error in overlay
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // fallback: "style-loader", // отменить действие
                    use: "css-loader"
                }),
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    // devtool: 'eval-sourcemap' // 'source-map'
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    config.devtool = production ? false : 'eval-sourcemap';

    return config;
};