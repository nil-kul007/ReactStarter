import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import root from '../reducer/rootReducer';

export default function configureStore(history) {
  return createStore(root, applyMiddleware(thunk, routerMiddleware(history)));
}
