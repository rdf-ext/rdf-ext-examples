const { ProvidePlugin } = require('webpack')

module.exports = {
  plugins: [
    new ProvidePlugin({
      Buffer: [require.resolve('buffer/'), 'Buffer'],
      process: require.resolve('process/browser')
    })
  ],
  resolve: {
    fallback: {
      buffer: require.resolve('buffer'),
      process: require.resolve('process/browser'),
      stream: require.resolve('readable-stream')
    }
  }
}
