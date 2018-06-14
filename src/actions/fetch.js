import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../config/constants'
import {InsertEnterprise} from '../API/FetchCompany';

export const getDataSuccess = data => {
    return {type: FETCHING_DATA_SUCCESS, data}
}

export const getDataFailure = error => {
    return {type: FETCHING_DATA_FAILURE, error}
}

export const fetchData = (data) => async dispatch => {
    dispatch({type: FETCHING_DATA});
    InsertEnterprise(data)
        .then(response => {
            console.log(response)
            switch (response) {
                case '0':
                    dispatch(getDataSuccess(response))
                    break;
                case '1':
                    dispatch(getDataFailure(response))
                    break;
                case '2':
                    dispatch(getDataFailure(response))
                    break;
                case '3':
                    dispatch(getDataFailure(response))
                    break;
                case '4':
                    dispatch(getDataFailure(response))
                    break;

                default:
                    break;
            }
        })
        .catch((err) => console.log(err))
    }
