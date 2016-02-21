import GroupedKatas from './grouped-katas.js';
import {KATAS_URL} from './config';

new GroupedKatas().load(KATAS_URL)
  .then(groupedKatas => {
    document.getElementById('app').innerHTML = JSON.stringify(groupedKatas);
  });