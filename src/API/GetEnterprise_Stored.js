import axios from 'axios';
import qs from 'qs';
import { WS } from '../constants';
import { token } from '../jwt';

export default async (data) => {
    return await axios.post(WS.GetEnterprise_Stored, qs.stringify({
        Subsector_ID: data
    }),{
        headers: {
            Authorization: "JERA " + token()
        }
    });
}