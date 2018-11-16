import axios from 'axios';
import qs from 'qs';
import { OHWS } from '../constants';
import { token } from '../jwt';

export default async (data) => {
    return await axios.post(OHWS.InsertNatural_person, qs.stringify({
        Sector_ID: data.ID,
        Name: data.Name ,
        Position: data.Position,
    }),{
        headers: {
            Authorization: "JERA " + token()
        }
    });
}
