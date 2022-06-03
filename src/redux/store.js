import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from './reducers';
import { NODE_ENV } from '../helpers/env';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const middleware = applyMiddleware(thunk);

let store = null;

if (NODE_ENV === 'production') {
  store = createStore(persistedReducer, middleware);
} else {
  store = createStore(
    persistedReducer,
    NODE_ENV === 'production' ? middleware : composeWithDevTools(middleware)
  );
}
const persistor = persistStore(store);

export { store, persistor };
