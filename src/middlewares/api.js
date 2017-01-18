import fetch from 'isomorphic-fetch';
export const CALL_API = Symbol('call api');

const API_ROOT = 'http://localhost:3000';

const apiMiddleware = ({ dispatch }) => next => action => {
  if (!action[CALL_API]) {
    console.log('irrelevant action passes');
    return next(action);
  }
  console.log('api fetch action catched');
  const [requestType, successType, failureType] = action[CALL_API].types;
  const { endpoint } = action[CALL_API];
  dispatch({
    type: requestType,
  });
  // load data now
  return fetch(`${API_ROOT}/${endpoint}`)
    .then(response => response.json())
    .then(json => {
      console.log('loading data successful');
      dispatch({
        type: successType,
        payload: json,
      });
    })
    .catch(err => {
      console.log('loading data failed');
      dispatch({
        type: failureType,
        payload: err,
      });
    });
};

export default apiMiddleware;
