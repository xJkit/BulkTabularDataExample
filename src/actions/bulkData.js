import * as Types from './actionTypes';
import { CALL_API } from 'middlewares/api';


export function loadBulkData() {
  const { GET_BULK_DATA } = Types;
  const action = {
    [CALL_API]: {
      types: [GET_BULK_DATA.REQUEST, GET_BULK_DATA.SUCCESS, GET_BULK_DATA.FAILURE],
      endpoint: 'bulkdata',
    },
  };
  return action;
}
