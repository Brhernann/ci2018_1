import axios from 'axios';
import qs from 'qs';
import { WSSE } from '../config/constants';

export const InsertEnterprise = async () => {
    return { data } = await axios.post( WSSE.InsertEnterprise, qs.stringify({
        // Clave: this.props...., 
        // pAgenda: RELEASE_DIARY_TYPE,
        // pTipoProfesional:PROFESIONAL_TYPE,
        // pFecha: DATE,
        // currentVersion: CURRENT_VERSION,
      })
    )
}