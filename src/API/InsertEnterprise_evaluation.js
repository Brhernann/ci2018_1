import axios from 'axios';
import qs from 'qs';
import {WS} from '../config/constants';

export default async (data) => {
    return await axios.post(WS.InsertEnterprise_evaluation, qs.stringify({
        Contact_Name: data.label_1,
        Position: data.label_2,
        Mail: data.label_3,
        Enterprise_Name: data.label_4,
        Address: data.label_6,
        City: data.label_7,
        Commune: data.label_8,
        Size_ID: 1,
        Sector_ID: data.label_5
    }))
}
