import axios from 'axios';
import qs from 'qs';
import { WSSE } from '../config/constants';

export const InsertEnterprise = async (BIGDATA) => {
    return { data } = await axios.post( WSSE.InsertEnterprise, qs.stringify({
        BIGDATA
      })
    )
}

// Contact: data.Contact , 
// Position: data.Position,
// Mail: data.Mail,
// company_name: data.company_name,
// Address: data.Address,
// Activity_sector: data.Activity_sector,
// Municipality: data.Municipality,
// Company_size: data.Company_size ,