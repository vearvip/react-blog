const withLess = require('@zeit/next-less')
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#ff7044',
      '@link-color': 'rgb(123, 123, 248)'
    }
  }
})