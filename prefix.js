const path = require('path')

module.exports = function prefix (pre) {
  return p => require(path.join(pre, p))
}