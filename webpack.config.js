const path = require('path');

// webpackの設定
module.exports = {
  // エントリーポイント（バンドルの起点）
  entry: {
    bundle: './src/index.ts'
  },
  // バンドルしたものの出力先の設定
  output: {
    path: path.join(__dirname, 'dist'), // __dirname: このファイルのPATH
    filename: '[name].js' // [name]はentry.bundleに置き換えられる
  },
  resolve: {
    extensions: ['.ts', '.js'] // import時にファイルの拡張子が必要無くなる
  },
  // 開発用サーバーの設定
  devServer: {
    // webpack-dev-serverが参照するファイル
    contentBase: path.join(__dirname, 'dist'),
    open: true
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}