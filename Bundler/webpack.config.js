const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 시작 파일
    entry: {
        // __drname\src\index.js
        index: path.resolve(__dirname, 'src', 'index.js')
    },

    // 최종 파일
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
    }
};

