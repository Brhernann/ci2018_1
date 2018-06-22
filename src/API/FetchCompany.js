import axios from 'axios';
import qs from 'qs';
import { WSSET } from '../config/constants';

export default async () => {
    return  await axios.post( WSSET.InsertEnterprise, qs.stringify({
        Contact: 'Contact' , 
        Position: 'Position',
        Mail: 'Mail',
        company_name: 'company_name',
        Address: 'Address',
        Activity_sector: 'Activity_sector',
        Municipality: 'Municipality',
        Company_size: 'Company_size' ,
      })
    )
}
