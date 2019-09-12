//client starter

require('babel-register')({
  presets: [ 'env' ]
})

module.exports = require('./src/client/client.js')