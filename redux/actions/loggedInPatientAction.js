import { SET_LOGGEDIN_PATIENT, UNSET_LOGGEDIN_PATIENT } from "./type";

export const setLoggedInPatient = patient => ({
    type: SET_LOGGEDIN_PATIENT,
    payload: patient
})
export const unsetLoggedInPatient = patient => ({
    type: UNSET_LOGGEDIN_PATIENT,
    payload: patient
})