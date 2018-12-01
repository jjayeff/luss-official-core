import React, { Component } from 'react';
import Visitors from './Visitors';
import RecentPosts from './RecentPosts';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

export default class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Visitors />
        <RecentPosts />
      </div>
    );
  }
}
