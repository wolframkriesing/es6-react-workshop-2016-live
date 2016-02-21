import GroupedKatas from './grouped-katas.js';
import {KATAS_URL} from './config';

import React from 'react';
import KataGroupsComponent from './component/kata-groups'
class Page extends React.Component {
  render() {
    var groupNames = Object.keys(this.props.katas.groups);
    return (
      <KataGroupsComponent groupNames={groupNames} />
    );
  }
}


import ReactDOM from 'react-dom';

new GroupedKatas()
  .load(KATAS_URL)
  .then((groupedKatas) => {
    ReactDOM.render(<Page katas={groupedKatas}/>, document.getElementById('app'));
  });