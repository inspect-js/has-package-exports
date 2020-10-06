'use strict';

var supported;
try {
	// eslint-disable-next-line global-require
	supported = require('@ljharb/patterns/patterns/pattern');
} catch (e) {
	supported = false;
}
module.exports = supported;
