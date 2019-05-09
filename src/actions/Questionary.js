//puedo tener muchas acciones, failure, success, warning,!

import { REDUX_Q } from "../constants";

export const Email = Email => ({
  type: REDUX_Q.GET_EMAIL,
  Email
});

export const AllCompany = AllCompany => ({
  type: REDUX_Q.ALL_COMPANY,
  AllCompany
});

export const AllMails = AllMails => ({
  type: REDUX_Q.ALL_MAILS,
  AllMails
});

export const Company = Company => ({
  type: REDUX_Q.GET_COMPANY,
  Company
});

export const Factor = Factor => ({
  type: REDUX_Q.GET_FACTOR,
  Factor
});

export const openQuestion = openQuestion => ({
  type: REDUX_Q.GET_OPENQUESTION,
  openQuestion
});

export const AllTheAnswer = AllTheAnswer => ({
  type: REDUX_Q.GET_ALL_THE_ANSWER,
  AllTheAnswer
});

export const resetCompany = resetCompany => ({
  type: "RESET_ACTION",
  resetCompany
});
