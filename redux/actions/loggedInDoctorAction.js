import { SET_LOGGEDIN_DOCTOR, UNSET_LOGGEDIN_DOCTOR } from "./type";

export const setLoggedInDoctor = doctor => ({
    type: SET_LOGGEDIN_DOCTOR,
    payload: doctor
})
export const unsetLoggedInDoctor = doctor => ({
    type: UNSET_LOGGEDIN_DOCTOR,
    payload: doctor
})