import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Other reducers are imported below
import bulkData from './bulkData';
import timer from './timeReducer';

const rootReducers = combineReducers({
  routing: routerReducer,
  bulkData,
  timer,
});

export default rootReducers;
