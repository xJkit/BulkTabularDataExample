import * as Types from './actionTypes';

export function setTimerStart() {
  return {
    type: Types.SET_TIMER_START,
    time: new Date().getTime(),
  };
}

export function setTimerEnd() {
  return {
    type: Types.SET_TIMER_END,
    time: new Date().getTime(),
  };
}
