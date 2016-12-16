// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config/index')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are not meant to be served over an HTTP server.\n' +
  '  You have to open index.html over file://\n'
)

var spinner = ora({
  text:'building for production...',
  spinner: {
    interval: 60,
    frames: [' 🚀       ', '💥 🚀      ', '☁ 🚀      ', '☁ ☁ 🚀    ', '☁ ☁ ☁ 🚀', '☁ ☁ ☁ ☁ 🚀', '        ✨', '         ']
  }
})
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
