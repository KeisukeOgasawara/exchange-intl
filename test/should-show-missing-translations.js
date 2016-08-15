/* eslint-disable */

import assert from 'assert';
import ENGLISH from '../lib/en';
import JAPANESE from '../lib/ja';

describe('exchange-intl', function () {
  it('test show missing', function () {
    const en = {
      foo: {
        a: 1,
        b: 2
      },
      bar: {
        c: 1,
        d: 2
      }
    };

    const ja = {
      foo: {
        a: 8
      }
    };

    const expected = {
      foo: {
        b: 2
      },
      bar: {
        c: 1,
        d: 2
      }
    };
    const actual = {};
    Object.keys(en).forEach(key => {
      if (!ja[key]) {
        actual[key] = en[key];
      } else {
        Object.keys(en[key]).forEach(subKey => {
          if (!ja[key][subKey]) {
            actual[key] = actual[key] || {};
            actual[key][subKey] = en[key][subKey];
          }
        });
      }
    });
    assert.deepEqual(expected, actual);
  });
  it('should show missing translations', function () {
    const actual = {};
    Object.keys(ENGLISH).forEach(key => {
      if (!JAPANESE[key]) {
        actual[key] = ENGLISH[key];
      } else {
        Object.keys(ENGLISH[key]).forEach(subKey => {
          if (!JAPANESE[key][subKey]) {
            actual[key] = actual[key] || {};
            actual[key][subKey] = ENGLISH[key][subKey];
          }
        });
      }
    });
    console.log(actual);
  });
});
