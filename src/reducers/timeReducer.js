import * as Types from 'actions/actionTypes';
const { SET_TIMER_START, SET_TIMER_END } = Types;

const initialState = {
  timeStart: 0,
  timeEnd: 0,
};

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIMER_START:
      return {
        ...state,
        timeStart: action.time,
      };
    case SET_TIMER_END:
      return {
        ...state,
        timeEnd: action.time,
      };
    default:
      return state;
  }
}
