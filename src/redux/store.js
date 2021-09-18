import {createStore, combineReducers} from 'redux';
import auth from './reducers/auth';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({auth});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
