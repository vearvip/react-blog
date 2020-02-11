const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')


module.exports = withCss(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#ff7044',
      '@link-color': 'rgb(123, 123, 248)'
    }
  }
}))