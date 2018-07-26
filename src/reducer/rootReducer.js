import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { brandConfig } from '../assets/brandName/constants/globalBrandConfig';

import items from '../reducer/items';
import login from '../reducer/login';
import register from '../reducer/register';

let config = brandConfig;
const root = combineReducers({
  brandConfig: config,
  items,
  router: routerReducer,
  login,
  register,
});

export default root;
