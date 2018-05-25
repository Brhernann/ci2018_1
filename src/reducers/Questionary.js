import { REDUX_Q } from '../config/constants';

const initialState = {
    email_selected : '',
    company_selected: {},
    factor_selected: {},
    openQuestion_selected: ''
}

const companyReducers = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_Q.GET_EMAIL:
            return {
                ...state,
                email_selected: action.Email
            }
        case REDUX_Q.GET_COMPANY:
            return {
                ...state,
                company_selected: action.Company
            }
        case REDUX_Q.GET_FACTOR:
            return {
                ...state,
                factor_selected: action.Factor
            }
        case REDUX_Q.GET_OPENQUESTION:
            return {
                ...state,
                openQuestion_selected: action.openQuestion
            }
        default:
            return state;
    }
}

export default companyReducers;
