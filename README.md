# exchange-intl
> i18n support for QUOINE Exchange web app

<!-- [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] -->

## Installation

This module is not available in npm. Install from QuoineFinancial github:

```sh
$ npm install --save QuoineFinancial/exchange-intl
```

## Usage

### Basic

```js
var exIntl = require('exchange-intl');

// change language (default is en)
exIntl.changeLanguage('ja');

// translate
exIntl.t('sign-in:title');
```

### Advance

This module uses [i18next](i18next.com). The returned object is i18next's instance. Therefore you can use all [i18next's API](i18next.com/docs/api/) with this object.

```js
// example: use external plugin
var exIntl = require('exchange-intl');
var Backend = require('i18next-xhr-backend');

exIntl.use(Backend);
```

## License

MIT © [thien]()

[npm-image]: https://badge.fury.io/js/exchange-intl.svg
[npm-url]: https://npmjs.org/package/exchange-intl
[travis-image]: https://travis-ci.org/QuoineFinancial/exchange-intl.svg?branch=master
[travis-url]: https://travis-ci.org/QuoineFinancial/exchange-intl
[daviddm-image]: https://david-dm.org/QuoineFinancial/exchange-intl.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/QuoineFinancial/exchange-intl
[coveralls-image]: https://coveralls.io/repos/QuoineFinancial/exchange-intl/badge.svg
[coveralls-url]: https://coveralls.io/r/QuoineFinancial/exchange-intl
