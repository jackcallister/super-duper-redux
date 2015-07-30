import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { reduxRouteComponent, routerStateReducer } from 'redux-react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from '../shared/components/routes';
import * as reducers from '../shared/reducers/index';
import promiseMiddleware from './middleware/promiseMiddleware';

const history = new BrowserHistory();
const combinedReducers = combineReducers({ router: routerStateReducer, ...reducers });
const createFinalStore = compose(applyMiddleware(thunk), applyMiddleware(promiseMiddleware), createStore);
const store = createFinalStore(combinedReducers);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={history}>
      <Route component={reduxRouteComponent(store)} children={routes} />
    </Router>,
    document.getElementById('app')
  );
});
