import { REDUX_R } from '../config/constants';

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

export const resetRegister = resetRegister => (
    {
        type: 'RESET_ACTION',
        resetRegister
    }
);