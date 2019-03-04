import axios from 'axios';
import qs from 'qs';
import {WS} from '../constants';
import { token as tokenGenerated } from '../jwt';

export default async (data) => {
    return await axios.post(WS.InsertLink, qs.stringify({
        Token: data.token,
        Rand: data.rand,
        Url: data.Url,
        Enterprise_Evaluation_ID: data.ID

    }),{
        headers: {
            Authorization: "JERA " + tokenGenerated()
        }
    });
}
