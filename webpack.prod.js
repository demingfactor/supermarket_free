const webpack = require('webpack')
// Bundles (CSS) to own CSS file rather than embedded in CSS.
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Autogenerates index.js into a index.html with auto script tags
const HtmlWebpackPlugin = require('html-webpack-plugin') //

// Purges unused CSS (Great for use with a style framework like Tailwind)
const PurgecssPlugin = require('purgecss-webpack-plugin')

// Wipes dist directory on recompiling, keeping the directory clean.
const CleanWebpackPlugin = require('clean-webpack-plugin')
const tailwindcss = require('tailwindcss')
const glob = require('glob')
const path = require('path')

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

const isProd = true

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, $BUILD_DIR),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: isProd
            }
          },
          'postcss-loader'
        ]
      })
    }]
  },
  plugins: [
    // Clean the 'dist' folder in production
    // isProd && new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('[name].[contenthash:8].css'),
    // Scan all the files in the 'src' folder and remove
    // unused class names in production
    isProd && new PurgecssPlugin({
      paths: glob.sync(path.join(__dirname, 'src') + '/**/*'),
      extractors: [{
        extractor: TailwindExtractor,
        // Specify the file extensions to include when scanning for
        // class names.
        extensions: ['html', 'js']
      }]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    isProd && new webpack.optimize.UglifyJsPlugin()
  ].filter(Boolean)
}