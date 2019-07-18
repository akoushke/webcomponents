const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODULE = {
  rules: [
    {
      test: /\.ts$/,
        use: [{
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: './tsconfig.json'
            }
          } , 'angular2-template-loader',
        ]
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['@babel/preset-react']
      }
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: true,
            interpolation: true,
            removeAttributeQuotes: false
          }
        }
      ]
    },
    {
      test: /\.css$/i,
      use: ['to-string-loader','style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: [
         'to-string-loader',
          'style-loader',
          'css-loader',
          'sass-loader'
      ]
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
      }]
    }
  ]
};

function createPlugins(template) {
  return [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(__dirname, '../samples/angular/src'), // location of your src
      {} // a map of your routes
    ),
    new HtmlWebpackPlugin({
      template: template,
    })
  ];
}

module.exports = [
  {
    name: 'React',
    cache: true,
    node: {
      fs: 'empty'
    },
    mode: 'development',
    stats: 'errors-only',
    devtool: 'inline-source-map',
    entry: {
      app: path.join(__dirname, 'platforms/react/src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'platforms/react/dist/')
    },

    module: MODULE,
    plugins: createPlugins(path.join(__dirname, 'platforms/react/src/index.html'))
  },
  {
    name: 'Cordova',
    cache: true,
    node: {
      fs: 'empty'
    },
    mode: 'development',
    stats: 'errors-only',
    devtool: 'inline-source-map',
    entry: {
      app: path.join(__dirname, './platforms/cordova/src/js/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './platforms/cordova/www')
    },
    module: MODULE,
    plugins: createPlugins(
      path.join(__dirname, './platforms/cordova/template/index.html')
    ),
  },
  {
    name: 'Angular',
    stats: 'errors-only',
    devtool: 'inline-source-map',
    watch: true,
    cache: true,
    node: {
      fs: 'empty'
    },
    entry: {
      polyfills: path.join(__dirname, 'platforms/angular/src/polyfills.ts'),
      vendor: path.join(__dirname, 'platforms/angular/src/vendor.ts'),
      app : path.join(__dirname, 'platforms/angular/src/main.ts'),
    },
    output : {
      filename: '[name].js',
      path: path.resolve(__dirname, 'platforms/angular/dist')
    },
    module: MODULE,
    plugins: createPlugins(path.join(__dirname, 'platforms/angular/src/index.html')),
    resolve: {
      extensions: ['.ts', '.js']
    },
  }
];