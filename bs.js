//backend starter

require('babel-register')({
  presets: [ 'env' ]
})

module.exports = require('./src/_helpers/fake_backend.js')