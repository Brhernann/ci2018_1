import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../config/constants';

const initialState = {
    data: [],
    isFetching: false,
    error: false
}

const FetchSector = (state = initialState, action) => {  

    switch (action.type) {

        case FETCHING_DATA:
            return{
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return{
                ...state,
                data: action.data,
                isFetching: false
            }
        case FETCHING_DATA_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.error
            }
    
        default:
            return state
    }
}

export default FetchSector;