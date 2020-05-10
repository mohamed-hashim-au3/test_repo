import { SET_SPECIALITIES } from './type'
import { getSpecialities as getSpecialitiesApi } from '../../services/api'
export const getSpecialities = aa =>  dispatch =>  {
    console.log("aaa")
    getSpecialitiesApi().then(({data}) => {
        console.log({
            data
        })
        if(data.data){
            dispatch({
                payload: data.data,
                type: SET_SPECIALITIES
            })
        }
    })
}
export const setSpecialities = (specialities = []) => ({
    specialities,
    type: SET_SPECIALITIES
})