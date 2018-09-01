import axios from 'axios';
import qs from 'qs';
import {WS} from '../constants';
import { token } from '../jwt';

export default async (data) => {
    return await axios.post(WS.ReadSector, qs.stringify({
        Token: 'HERE',
    }),{
        headers: {
            Authorization: "JERA " + token()
        }
    });
}