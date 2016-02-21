var assert = require('assert');
let {promiseThat, isRejectedWith} = require('hamjest');

import {INVALID_URL, KATAS_URL} from './config';

import GroupedKatas from './grouped-katas';

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
