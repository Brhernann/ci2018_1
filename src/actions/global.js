import { FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../config/constants'

export const getSuccess = data => {
    return {type: FETCHING_DATA_SUCCESS, data}
}

export const getFailure = error => {
    return {type: FETCHING_DATA_FAILURE, error}
}
