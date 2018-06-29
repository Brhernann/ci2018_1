import { REDUX_R } from '../constants';

export const getRegister = getRegister => (
    {
        type: REDUX_R.GET_REGISTER, 
        getRegister
    }
);

export const getToken = getToken => (
    { 
        type: REDUX_R.GET_TOKEN, 
        getToken
    }
);

export const getEmails = getEmails => (
    {
        type: REDUX_R.GET_MAILS, 
        getEmails
    }
);

export const resetRegister = resetRegister => (
    {
        type: 'RESET_ACTION',
        resetRegister
    }
);