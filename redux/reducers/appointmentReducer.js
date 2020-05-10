import { SET_APPOINTMENT_TIME } from "../actions/type";
import { appointment } from './_initialStates'

export default (state = appointment, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_APPOINTMENT_TIME:
      return {
        ...state,
        time: payload
      };

    default:
      return state;
  }
};
