import { SET_USER, UNSET_USER } from "../actions/type";
import { user as initialState } from './_initialStates';


export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_USER:
      return payload;

    case UNSET_USER:
      return payload;

    default:
      return state;
  }
};
