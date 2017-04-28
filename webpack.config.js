const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './js/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devtool: '#eval-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(eot|ttf|wav|mp3|pdf|woff2|woff|png|svg|gif)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
