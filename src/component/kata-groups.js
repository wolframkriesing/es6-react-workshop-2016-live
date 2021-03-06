import React from 'react';

export default class KataGroupsComponent extends React.Component {
  render() {
    const groupNames = this.props.groupNames;
    
    function groupNameClicked(groupName) {
      console.log('group was clicked', groupName);
    }
    
    return <div id="layout" className="content pure-g">
      <div id="nav" className="pure-u">
        <a href="#" className="nav-menu-button">Menu</a>

        <div className="nav-inner">
          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-heading">Kata groups</li>
              <li className="pure-menu-item">
              </li>
              {groupNames.map(groupName => <li className="pure-menu-item">
                <a href="#" className="pure-menu-link" onClick={groupNameClicked.bind(null, groupName)}>{groupName}  <span className="email-count">(2)</span></a>
              </li>)}
            </ul>
          </div>
        </div>
      </div>

      <div id="list" className="pure-u-1">
        {['kata1', 'kata2'].map(name => <KataItem name={name} />)}
      </div>

      <Kata />

    </div>

  }
}

class KataItem extends React.Component {
  render() {
    return (
      <div className="email-item pure-g">
        <div className="pure-u-3-4">
          <h5 className="email-name">{this.props.name}</h5>
        </div>
      </div>
    );
  }
}

class Kata extends React.Component {
  render() {
    return (
      <div id="main" className="pure-u-1">
        <div className="email-content">
          <div className="email-content-header pure-g">
            <div className="pure-u-1-2">
              <h1 className="email-content-title">Template strings - basics</h1>

              <p className="email-content-subtitle">
                A template string, is wrapped in backticks.
              </p>
            </div>

            <div className="email-content-controls pure-u-1-2">
              <button className="secondary-button pure-button">Open in TDDbin</button>
            </div>
          </div>

          <div className="email-content-body">
            <p>nothing here yet</p>
          </div>
        </div>
      </div>
    );
  }
}