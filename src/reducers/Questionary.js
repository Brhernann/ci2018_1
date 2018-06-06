import { REDUX_Q } from '../config/constants';

const initialState = {
    email_selected : '',
    company_selected: {},
    factor_selected: {},
    openQuestion_selected: '',
    AllTheAnswer:[]
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
        case REDUX_Q.GET_ALL_THE_ANSWER:
            return {
                ...state,
                AllTheAnswer: action.AllTheAnswer
            }
        default:
            return state;
    }
}

export default companyReducers;
