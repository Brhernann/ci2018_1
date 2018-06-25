import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../config/constants'
import InsertEnterprise_evaluation from '../API/InsertEnterprise_evaluation';
import InsertLink from '../API/InsertLink';
import ReadSector from '../API/ReadSector';
import ReadLink from '../API/ReadLink';

export const getDataSuccess = data => {
    return {type: FETCHING_DATA_SUCCESS, data}
}

export const getDataFailure = error => {
    return {type: FETCHING_DATA_FAILURE, error}
}

export const fetchData_1 = (data) => async dispatch => {
    dispatch({type: FETCHING_DATA});

    InsertEnterprise_evaluation(data)
        .then(response => {
            response.data.success
            ? dispatch(getDataSuccess(response.data))
            : dispatch(getDataFailure(response.data.error))

        })
        .catch((err) => console.log(err))
    }

export const fetchData_2 = (data) => async dispatch => {
    dispatch({type: FETCHING_DATA});

    InsertLink(data)
        .then(response => {
            response.data.success
                ? dispatch(getDataSuccess(response.data))
                : dispatch(getDataFailure(response.data.error))

        })
        .catch((err) => console.log(err))
    }

export const fetchData_3 = (data) => async dispatch => {
    dispatch({type: FETCHING_DATA});

    ReadLink(data)
        .then(response => {
            response.data.success
            ? dispatch(getDataSuccess(response.data))
            : dispatch(getDataFailure(response.data.error))

        })
        .catch((err) => console.log(err))
    }

export const fetchData_4 = (data) => async dispatch => {
    dispatch({type: FETCHING_DATA});

    ReadSector(data)
        .then(response => {
            response.data.success
                ? dispatch(getDataSuccess(response.data))
                : dispatch(getDataFailure(response.data.error))
        })
        .catch((err) => console.log(err))
    }