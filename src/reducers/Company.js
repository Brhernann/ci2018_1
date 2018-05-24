import { SET_COMPANY } from '../actions';

export const company_selected = ( state, action ) => {
    switch (action.type) {
        case SET_COMPANY:
        return {...state, company_selected: action.value }
        default:
            return state;
    }
    return state
}
