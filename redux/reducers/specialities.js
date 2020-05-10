import { specialities } from './_initialStates'
import { SET_SPECIALITIES } from '../actions/type'

export default (state = specialities, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_SPECIALITIES:
            return payload;

        default:
            return state;
    }
}