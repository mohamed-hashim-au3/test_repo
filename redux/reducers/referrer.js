import { SET_REFERRER } from "../actions/type";
import { referrer as initialState} from "./_initialStates"

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_REFERRER:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
