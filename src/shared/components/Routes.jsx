import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Dashboard from './Dashboard';

const routes = (
  <Route component={App}>
    <Route path='/' component={Dashboard} />
  </Route>
)

export default routes;
