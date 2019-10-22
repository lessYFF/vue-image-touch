const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'dev' ? true : false
const webpackConfig = {
    stats: 'errors-only',
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
        isDev
            ? new HtmlWebpackPlugin({
                  template: './example/index.html',
                  appMountId: 'app',
              })
            : () => {},
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\\/]node_modules[\\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}

module.exports = webpackConfig
