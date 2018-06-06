//puedo tener muchas acciones, failure, success, warning,!

import { REDUX_Q } from '../config/constants';

export const Email = Email => (
    {
        type: REDUX_Q.GET_EMAIL, 
        Email
    }
);

export const Company = Company => (
    {
        type: REDUX_Q.GET_COMPANY, 
        Company
    }
);

export const Factor = Factor => (
    {
        type: REDUX_Q.GET_FACTOR, 
        Factor
    }
);

export const openQuestion = openQuestion => (
    {
        type: REDUX_Q.GET_OPENQUESTION, 
        openQuestion
    }
);

export const AllTheAnswer = AllTheAnswer => (
    {
        type: REDUX_Q.GET_ALL_THE_ANSWER, 
        AllTheAnswer
    }
);
