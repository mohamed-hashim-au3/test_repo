import { SET_LOGGEDIN_DOCTOR,UNSET_LOGGEDIN_DOCTOR } from "../actions/type";
import { doctorLoggedIn } from './_initialStates'

export default (state = doctorLoggedIn, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_LOGGEDIN_DOCTOR:
      return payload
    
    case UNSET_LOGGEDIN_DOCTOR:
      return doctorLoggedIn

    default:
      return state;
  }
};
