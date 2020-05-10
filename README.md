# has-package-exports <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Does the current node version have support for the "exports" field in package.json?

At the time of this writing, node v13+ has support for the ["exports" field in package.json](https://nodejs.org/api/esm.html#esm_package_exports).

This library exports `true` if the current node version supports it, `false` if it does not, and `null` if it's in a browser.

Require or import `has-package-exports/conditional` to determine if the current environment supports conditional exports (as of this writing, node v13.7+).

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-package-exports
[npm-version-svg]: http://versionbadg.es/ljharb/has-package-exports.svg
[travis-svg]: https://travis-ci.org/ljharb/has-package-exports.svg
[travis-url]: https://travis-ci.org/ljharb/has-package-exports
[deps-svg]: https://david-dm.org/ljharb/has-package-exports.svg
[deps-url]: https://david-dm.org/ljharb/has-package-exports
[dev-deps-svg]: https://david-dm.org/ljharb/has-package-exports/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/has-package-exports#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-package-exports.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/has-package-exports.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/has-package-exports.svg
[downloads-url]: http://npm-stat.com/charts.html?package=has-package-exports
