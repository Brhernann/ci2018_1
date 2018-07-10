import axios from 'axios';
import qs from 'qs';
import {WS} from '../constants';

export default async (data) => {
    return await axios.post(WS.getMailsubscribed, qs.stringify({
        Enterprise_Evaluation_ID: data
    })) 
}