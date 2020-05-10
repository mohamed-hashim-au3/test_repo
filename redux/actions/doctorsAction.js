import { SET_DOCTORS } from "./type";
import { getDoctorsList } from '../../services/api'

export const getDoctors = () => dispatch => {
    getDoctorsList().then(res => {
        console.log('doctorres',res)
        if(res.data && res.data.data){
            dispatch({
                type: SET_DOCTORS,
                payload: res.data.data
            })
        }
    })
}