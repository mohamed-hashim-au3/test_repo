import { DASHBOARD_TOGGLE_COLLAPSE,DASHBOARD_SET_COLLAPSE } from "../actions/type";
import { dashboard } from './_initialStates'

export default (state = dashboard, action) => {
  const { payload, type } = action;
  switch (type) {
    case DASHBOARD_TOGGLE_COLLAPSE:
      return {
        ...state,
        collapsed: !state.collapsed
      };

    case DASHBOARD_SET_COLLAPSE:
      return {
        ...state,
        collapsed: payload
      };

    default:
      return state;
  }
};
