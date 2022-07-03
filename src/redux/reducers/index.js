import { combineReducers } from 'redux';
import listUser from './listUser';
import detailUser from './detailUser';
import detailReceiver from './detailReceiver';

const rootReducers = combineReducers({
  listUser,
  detailUser,
  detailReceiver
});

export default rootReducers;
