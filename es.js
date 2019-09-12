//extractor starter

require('babel-register')({
  presets: [ 'env' ]
})

module.exports = require('./src/_helpers/dataExtractor.js')