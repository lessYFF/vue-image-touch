const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'dev' ? true : false
const webpackConfig = {
    stats: 'errors-only',
    output: {
        filename: 'index.js',
        chunkFilename: '[name][hash].js',
        umdNamedDefine: true,
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, './lib'),
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        isDev
            ? new HtmlWebpackPlugin({
                  template: './example/index.html',
                  appMountId: 'app',
              })
            : () => {},
    ],
}

module.exports = webpackConfig
