const path                 = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const CleanWebpackPlugin   = require('clean-webpack-plugin')
const pathConfig           = require('./config/pathConfig')

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    context: pathConfig.rootPath,
    output: {
        path: pathConfig.staticPath,
        filename: '[name].[hash:8].js',
        publicPath: '/dist/',
    },

    resolve: {
        alias: {},
        extensions: ['.jsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader,},
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [require('autoprefixer')()],
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], { root: pathConfig.rootPath }),
        new HtmlWebpackPlugin({
            template: './template/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash:8].css',
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: {
            disableDotRule: true,
            rewrites: [{ from: /./, to: '/dist/index.html' }],
        },
        noInfo: false,
        port: 8930,
    },

    devtool: 'source-map',
}
