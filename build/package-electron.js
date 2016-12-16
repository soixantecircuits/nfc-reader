var path = require('path')
var config = require('../config/index')
var packager = require('electron-packager')
var program = require('commander')

program
  .option(
    '-p --platform <platform>',
    `Package destination platform. Default to '${require('os').platform()}'.`,
    /^(linux|darwin|win32|all)$/i,
    require('os').platform()
  ).parse(process.argv)

const packageOptions = {
  dir: config.build.appRoot,
  out: config.build.packageDestination,
  name: config.build.name,
  'app-version': config.build.version,
  ignore: config.build.ignoredPaths,
  prune: true,
  overwrite: true,
  platform: program.platform,
  arch: 'x64',
}

packager(packageOptions, function (err, appPaths) {
  if (err) throw err
  console.log('\nDone packaging app.\nPaths to releases created:\n', appPaths)
})
