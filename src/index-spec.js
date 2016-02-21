var assert = require('assert');
var hamjest = require('hamjest');
var promiseThat = hamjest.promiseThat;
var isRejectedWith = hamjest.isRejectedWith;

var KATAS_URL = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';
var INVALID_URL = 'http://katas.tddbin.com/katas/es6/language/__all__.json';
var fetch = require('node-fetch');

function loadKatasJsonFrom(url) {
  return fetch(url)
    .then(function(res) {
      return res.json();
    })
    .catch(function() {
      throw 'Error loading katas.'
    })
    .then(function(katasJson) {
      if ('groups' in katasJson) {
        return katasJson;
      }
      throw 'Invalid JSON format.'
    })
    ;
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
