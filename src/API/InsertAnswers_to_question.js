import axios from 'axios';
import qs from 'qs';
import { OHWS } from '../constants';
import { token } from '../jwt';

export default async (data) => {
    return await axios.post(OHWS.InsertAnswers_to_question, qs.stringify({
        Answer: data,
        Question_ID: 1,
    }),{
        headers: {
            Authorization: "JERA " + token()
        }
    });
}
