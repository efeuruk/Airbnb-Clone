const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 7000,
      watchContentBase: true,
      open: true
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/homes.html',
        filename: 'homes.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/rooms.html',
        filename: 'rooms.html'
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
  ],
  module: {
    rules: [
        {
          test: /\.(scss)$/,
          use: [
              {
                  loader: 'style-loader', // inject CSS to page
              }, 
              {
                  loader: 'css-loader', // translates CSS into CommonJS modules
              }, 
              {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                      plugins: function () { // post css plugins, can be exported to postcss.config.js
                          return [
                              require('precss'),
                              require('autoprefixer')
                          ];
                      }
                  }
              }, 
              {
                  loader: 'sass-loader' // compiles Sass to CSS
              }
          ]
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                    minimize: false
                }
              }
            
            ]
        },
        {
          test: /\.(svg|png|jpe?g|gif|mp4)$/i,
          use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[hash].[ext]",
                  outputPath: "img",
                }
            }
        ]
        },
    ],
},
};