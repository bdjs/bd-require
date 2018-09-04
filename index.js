const path = require('path')
const prefix = require('./prefix')

const dirname = path.dirname(process.mainModule.filename)

module.exports = prefix(dirname)
