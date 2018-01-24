'use strict'

const path = require('path')
const dirname = path.dirname(process.mainModule.filename)

module.exports = p => require(path.join(dirname, p))
