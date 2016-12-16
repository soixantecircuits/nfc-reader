// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var package = require('../package.json')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path.resolve(__dirname, '../dist'),
    appRoot: path.resolve(__dirname, '../'),
    version: package.version,
    name: package.name,
    packageDestination: path.resolve(__dirname, '../releases'),
    ignoredPaths: (() => {
      const paths = [
        '^/src',
        '^/index.html',
        '^/static',
        '^/.cache',
        '^/README.md',
        '^/releases',
        '^/.babelrc',
        '^/.editorconfig',
        '^/.eslint',
        '^/.gitignore',
        '^/build'
      ]

      const regexps = paths.map((path) => {
        return new RegExp(path)
      })
      return regexps
    })(),
    productionSourceMap: true
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {}
  }
}
