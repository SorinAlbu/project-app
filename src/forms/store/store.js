import { createStore } from 'redux';
import rootReducer from '../reducer/reducers';
 
export default createStore(
  rootReducer,
  undefined,
);