import * as Types from 'actions/actionTypes';
const { GET_BULK_DATA } = Types;
const initialState = {
  isFetching: false,
  payload: [],
  err: '',
};

const bulkDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BULK_DATA.REQUEST:
      return {
        ...state,
        isFetching: true,
        err: '',
      };
    case GET_BULK_DATA.FAILURE: {
      const errMsg = action.payload.message;
      return {
        ...state,
        isFetching: false,
        err: errMsg,
      };
    }
    case GET_BULK_DATA.SUCCESS:
      return {
        ...state,
        payload: action.payload,
        err: '',
        isFetching: false,
      };
    default:
      return state;
  }
};

export default bulkDataReducer;
