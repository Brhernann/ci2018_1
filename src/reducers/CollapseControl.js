import { REDUX } from '../config/constants';

const initialState = {
    Booleano: false,
    CollapseActive: ['0'],
    QuestionaryActive: null
}

const BooleanReducers = (state = initialState, action) => {
    switch (action.type) {
        case REDUX.COLLAPSE_BOOLEAN:
            return {
                ...state,
                Booleano: action.Booleano,
            }
        case REDUX.COLLAPSE_ACTIVE:
            return {
                ...state,
                CollapseActive: action.CollapseActive
            }
        case REDUX.QUESTIONARY_ACTIVE:
            return {
                ...state,
                QuestionaryActive: action.QuestionaryActive
            }
        default:
            return state;
    }
}

export default BooleanReducers;
