const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((accu, type) => {
    const ret = accu;
    ret[type] = `${base}_${type}`;
    return ret;
  }, {});
}

export const GET_BULK_DATA = createTypes('GET_BULK_DATA');
