const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  mode:"development",
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin(),
            new TerserPlugin(),
            new OptimizeCssAssetsWebpackPlugin(),
  ],
  optimization: {
    minimize:true,
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsWebpackPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [ {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '',
            esModule: true,
          },
        }, 'css-loader', "sass-loader",],
      },
      {
        test: /\.ttf$/i,
        loader: 'file-loader',
        
      },      
    ],
  }
}