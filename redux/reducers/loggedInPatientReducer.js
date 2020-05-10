import { SET_LOGGEDIN_PATIENT,UNSET_LOGGEDIN_PATIENT } from "../actions/type";
import { patientLoggedIn } from './_initialStates'

export default (state = patientLoggedIn, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_LOGGEDIN_PATIENT:
      return payload
    
    case UNSET_LOGGEDIN_PATIENT:
      return patientLoggedIn

    default:
      return state;
  }
};
