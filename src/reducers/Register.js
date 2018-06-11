import { REDUX_R } from '../config/constants';

const initialState = {
    Register: {},
    Token: {
        token:'',
        rand:''
    }
}

const registerReducers = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_R.GET_REGISTER:
            return {
                ...state,
                Register: action.getRegister
            }
        case REDUX_R.GET_TOKEN:
            return {
                ...state,
                Token: action.getToken
            }
        default:
            return state;
    }
}

export default registerReducers;
