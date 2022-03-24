const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const pathContentHTML = './src/component/content/';

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        asyncChunks: true,
        assetModuleFilename: 'img/[name][ext]',
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ['html-loader'],

            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer"
                                    ]
                                ]

                            }
                        }
                    },
                    'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },


        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new CopyPlugin({
            patterns: [
                {
                    from: "img/portfolio",
                    to: "img/portfolio",
                    context: "src/",
                }
            ]
        }),

        //  new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, './src/component/header/header.html'),
        //     location: 'header',
        //     template_filename: ['index.html']
        // }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, pathContentHTML + '/hero/hero.html'),
        //     location: 'main',
        //     template_filename: ['index.html']
        // }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, pathContentHTML + 'skills/skills.html'),
        //     location: 'main',
        //     template_filename: ['index.html']
        // }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, pathContentHTML + 'portfolio/portfolio.html'),
        //     location: 'main',
        //     template_filename: ['index.html']
        // }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, pathContentHTML + 'video/video.html'),
        //     location: 'main',
        //     template_filename: ['index.html']
        // }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, pathContentHTML + 'price/price.html'),
        //     location: 'main',
        //     template_filename: ['index.html']
        // }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, pathContentHTML + 'contacts/contacts.html'),
        //     location: 'main',
        //     template_filename: ['index.html']
        // }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, pathContentHTML + 'footer/footer.html'),
        //     location: 'footer',
        //     template_filename: ['index.html']
        // }),

        new HtmlWebpackPlugins({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
    ]

}
