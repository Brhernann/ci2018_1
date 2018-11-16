import { REDUX_R } from "../constants";

const initialState = {
  Register: {},
  Register_Person: {},
  Emails: [],
  Token: {
    token: "",
    rand: ""
  }
};

const registerReducers = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_R.GET_REGISTER:
      return {
        ...state,
        Register: action.getRegister
      };
    case REDUX_R.GET_REGISTER_PERSON:
      return {
        ...state,
        Register_Person: action.getRegisterPerson
      };
    case REDUX_R.GET_TOKEN:
      return {
        ...state,
        Token: action.getToken
      };
    case REDUX_R.GET_MAILS:
      return {
        ...state,
        Emails: action.getEmails
      };
    case "RESET_ACTION":
      return initialState;
    default:
      return state;
  }
};

export default registerReducers;
