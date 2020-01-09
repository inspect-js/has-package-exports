'use strict';

var test = require('tape');
var semver = require('semver');
var hasPackageExports = require('has-package-exports');

test('has-package-exports', function (t) {
	var expected = typeof window === 'undefined' ? semver.satisfies(process.version, '>= 13') : null;
	t.equal(hasPackageExports, expected, 'module exports expected value');
	t.end();
});
