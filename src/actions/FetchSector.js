import ReadSector from '../API/ReadSector';
import { getSuccess, getFailure } from './global'

const fetchSector = (data) => async dispatch => {
    dispatch({type: 'FETCHING_DATA'});
    ReadSector(data)
        .then(response => {
            response.data.success
                ? dispatch(getSuccess(response.data))
                : dispatch(getFailure(response.data.error))
        })
        .catch((err) => console.log(err))
    }

export default fetchSector