var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env', 'react-app']
                            }
                        },
                        {
                            loader: 'eslint-loader'
                        }
                ]
            }            
        ]
    },
    devServer:{
        contentBase: 'dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
        ]    
}