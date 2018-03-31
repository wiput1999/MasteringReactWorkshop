const moment = require('moment');

const closeTime = moment('2018-04-01 12:00');
let millis = closeTime.diff(moment());
let duration = moment.duration(millis);
let countdown = `${Math.floor(duration.asHours())} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`;

const SET_FIELD = 'SET_FIELD';
const RESET_STATE = 'RESET_STATE';

const initialState = {
  name: '',
  email: '',
  ticketType: '',
  food: false,
  agreeTerm: false,
  countdown
};

// Action reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };
    case RESET_STATE:
      millis = closeTime.diff(moment());
      duration = moment.duration(millis);
      countdown = `${Math.floor(duration.asHours())} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`;
      return {
        ...initialState,
        countdown
      };
    default:
      return state;
  }
};

// Action creator
export const setField = (key, value) => ({
  type: SET_FIELD,
  key,
  value
});

export const resetState = () => ({ type: RESET_STATE });
