var hbs = require('handlebars');

exports.extension = ['handlebars', 'hbs'];
exports.noDependencies = true;
exports.compile = function (src) {
	return { code: 'module.exports = ' + hbs.precompile(src) + ';' };
};
