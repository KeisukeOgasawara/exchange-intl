'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

var _enJs = require('./en.js');

var _enJs2 = _interopRequireDefault(_enJs);

var _jaJs = require('./ja.js');

var _jaJs2 = _interopRequireDefault(_jaJs);

_i18next2['default'].init({
  lng: 'en',
  resources: {
    en: _enJs2['default'],
    ja: _jaJs2['default']
  }
});

exports['default'] = _i18next2['default'];
module.exports = exports['default'];