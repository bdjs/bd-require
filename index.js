'use strict';

var path = require('path');
var dirname = path.dirname(process.mainModule.filename);

module.exports = function(p){
	return require(path.join(dirname, p));
};