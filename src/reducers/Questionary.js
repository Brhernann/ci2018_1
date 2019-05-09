import { REDUX_Q } from "../constants";

const initialState = {
  factor_selected: {},
  company_selected: {},
  AllCompany: [],
  AllMails: [],
  AllTheAnswer: {
    User: "",
    FreeQuestion: "",
    Companys: []
  }
};

const companyReducers = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_Q.GET_EMAIL:
      return {
        ...state,
        email_selected: action.Email
      };
    case REDUX_Q.ALL_COMPANY:
      return {
        ...state,
        AllCompany: action.AllCompany
      };
    case REDUX_Q.ALL_MAILS:
      return {
        ...state,
        AllMails: action.AllMails
      };
    case REDUX_Q.GET_COMPANY:
      return {
        ...state,
        company_selected: action.Company
      };
    case REDUX_Q.GET_FACTOR:
      return {
        ...state,
        factor_selected: action.Factor
      };
    case REDUX_Q.GET_OPENQUESTION:
      return {
        ...state,
        openQuestion_selected: action.openQuestion
      };
    case REDUX_Q.GET_ALL_THE_ANSWER:
      return {
        ...state,
        AllTheAnswer: action.AllTheAnswer
      };
    case "RESET_ACTION":
      return initialState;
    default:
      return state;
  }
};

export default companyReducers;
