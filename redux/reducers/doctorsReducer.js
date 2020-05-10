import { SET_DOCTORS } from "../actions/type";

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_DOCTORS:
      return {
        ...state,
        all: payload
      };

    default:
      return state;
  }
};
