var fetch = require('node-fetch');

export default class GroupedKatas {
  load(url) {
    return loadKatasJsonFrom(url);
  }
}

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
