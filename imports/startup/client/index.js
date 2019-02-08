import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import App from '../../ui/App'
import { Bins } from './../../collections/bins';
import { IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import BinsMain from './../../../client/components/bins/bins_main';
import BinsList from './../../../client/components/bins/bins_list';

const routes = (
  <BrowserRouter history={browserHistory}>
      <App>
          <Route exact path='/' component={BinsList} />
          <Route path='/bins/:binId' component={BinsMain} />
      </App>
  </BrowserRouter>
);


Meteor.startup(() => {
    render(routes, document.getElementById('app'))
});