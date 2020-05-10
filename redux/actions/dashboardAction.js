import { DASHBOARD_SET_COLLAPSE, DASHBOARD_TOGGLE_COLLAPSE } from "./type";

export const setDashboardCollapse = payload => ({
    type: DASHBOARD_SET_COLLAPSE,
    payload
})
export const toggleDashboardCollapse = payload => ({
    type: DASHBOARD_TOGGLE_COLLAPSE,
    payload
})