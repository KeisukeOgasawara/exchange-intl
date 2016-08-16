/* eslint linebreak-style: ["error", "unix"] */
/* eslint linebreak-style: ["error", "windows"] */

import assert from 'assert';
import exchangeIntl from '../lib';

describe('exchange-intl', function () {
  it('should translate English as default', function () {
    assert.equal(exchangeIntl.t('test:basic'), 'english');
  });
  it('should translate Japanese', function () {
    exchangeIntl.changeLanguage('ja');
    assert.equal(exchangeIntl.t('test:basic'), 'japanese');
    exchangeIntl.changeLanguage('en');
  });
  it('should translate with interpolation', function () {
    assert.equal(
      exchangeIntl.t('test:interpolation', {name: 'exchange'}),
      'quoine-exchange'
    );
  });
});
