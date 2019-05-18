import { REDUX_R } from "../constants";

export const getRegister = getRegister => ({
  type: REDUX_R.GET_REGISTER,
  getRegister
});

export const getRegisterPerson = getRegisterPerson => ({
  type: REDUX_R.GET_REGISTER_PERSON,
  getRegisterPerson
});

export const getToken = getToken => ({
  type: REDUX_R.GET_TOKEN,
  getToken
});

export const getEmails = getEmails => ({
  type: REDUX_R.GET_MAILS,
  getEmails
});

export const resetRegister = resetRegister => ({
  type: "RESET_ACTION",
  resetRegister
});

export const getRegisterAutoEvaluation = getRegisterAutoEvaluation => ({
  type: REDUX_R.GET_REGISTER_AUTO_EVALUATION,
  getRegisterAutoEvaluation
});

export const getRegisterAutoEvaluationID = getRegisterAutoEvaluationID => ({
  type: REDUX_R.GET_REGISTER_AUTO_EVALUATIONID,
  getRegisterAutoEvaluationID
});