import { combineReducers } from 'redux';
import listUser from './listUser';
import detailUser from './detailUser';

const rootReducers = combineReducers({
  listUser,
  detailUser
});

export default rootReducers;
