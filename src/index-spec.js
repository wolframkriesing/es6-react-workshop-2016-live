var assert = require('assert');
let {promiseThat, isRejectedWith} = require('hamjest');

const URL_PREFIX = 'http://katas.tddbin.com/katas/es6/language/';
const KATAS_URL = `${URL_PREFIX}__grouped__.json`;
const INVALID_URL = `${URL_PREFIX}__all__.json`;

import GroupedKatas from './index';

function loadKatasJsonFrom(url) {
  return new GroupedKatas().load(url);
}

describe('loading the katas JSON', () => {
  it('works', () => {
    return loadKatasJsonFrom(KATAS_URL);
  });
  it('bails for non-JSON data', () => {
    return promiseThat(loadKatasJsonFrom('http://es6katas.org'),
      isRejectedWith('Error loading katas.')
    );
  });
  it('bails for invalid JSON data', () => {
    return promiseThat(loadKatasJsonFrom(INVALID_URL),
      isRejectedWith('Invalid JSON format.')
    );
  });
});
