import axios from 'axios';
import qs from 'qs';
import {WS} from '../config/constants';

export default async (data) => {
    return await axios.post(WS.ReadLink, qs.stringify({
        Rand: data.Rand,
    })) 
}