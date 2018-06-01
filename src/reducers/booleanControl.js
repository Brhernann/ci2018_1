import { REDUX } from '../config/constants';

const initialState = {
    boolean : false
}

const BooleanReducers = (state = initialState, action) => {
    switch (action.type) {
        case REDUX.STATE:
            return {
                ...state,
                boolean: action.Booleano
            }
        default:
            return state;
    }
}

export default BooleanReducers;
