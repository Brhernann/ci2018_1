import axios from 'axios';
import qs from 'qs';
import { OHWS } from '../constants';

export default async (data) => {
    return await axios.post(OHWS.InsertRelationship, qs.stringify({
        Mail_Surveyed_ID: data.Mail_Surveyed_ID,
        Enterprise_Selected_ID: data.Enterprise_Selected_ID,
        Variables_Selected_ID: data.Variables_Selected_ID,
        Answer_To_Question_ID: data.Answer_To_Question_ID
    }))
}
