const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ['./src/app.js'],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换（HMR）
        new webpack.NamedModulesPlugin(),
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    ],
    devServer: {
        publicPath: '/',
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        compress: true,
        open: true,
        overlay: true,
        quiet: true
    },
};