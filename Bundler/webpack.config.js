const path = require('path');

module.exports = {
    // 시작 파일
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
    },

    // 최종 파일
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    }
};

