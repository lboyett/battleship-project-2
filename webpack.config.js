const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        // module: './src/module.js',
      },
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
      },
      devServer: {
        static: './dist',
      },
      plugins: [
        new HtmlWebpackPlugin({
            title: 'Battleship Project 2',
            filename: 'index.html',
            template: './src/index.html'
        }),
      ],
    output: {
        filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '../dist/',
    },
    optimization: {
        runtimeChunk: 'single',
      },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
};
