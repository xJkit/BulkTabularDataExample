import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Other reducers are imported below
import bulkData from './bulkData';

const rootReducers = combineReducers({
  routing: routerReducer,
  bulkData,
});

export default rootReducers;
