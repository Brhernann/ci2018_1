import axios from 'axios';
import qs from 'qs';
import { OHWS } from '../constants';

export default async (data) => {
    return await axios.post(OHWS.InsertMail_surveyed, qs.stringify({
        Mail: data.Mail,
        Enterprise_Evaluation_ID: data.ID,
        Surveyed_ID : 1,

    }))
}
