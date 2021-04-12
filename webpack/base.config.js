module.exports = options => {
    return {
      entry: './src/index.js',
      node: { fs: 'empty' },
      module: {
        rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
          }, {
              test: /\.css$/,
              loader: require.resolve('css-loader'),
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                }
              }
          }, {
              test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
              loader: 'file-loader'
          }, {
              test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
              loader: 'file-loader',
              query: {
                  name: '[name].[ext]?[hash]'
              }
          },
        ]
      }
    }
  }
 

