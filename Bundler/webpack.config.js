const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        }),
        new MiniCssExtractPlugin({
            filename: 'common.css',
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
    },

    module: {
        rules: [
            {
                // 확장자가 css일때 use를 사용한다, use는 뒤에서부터 적용된다, ex-> css-loader > style-loader
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader']
            }
        ]
    }
};

