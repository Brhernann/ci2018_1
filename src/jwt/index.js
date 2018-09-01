import jwt from 'jwt-simple';
import moment from 'moment';
import { SECRET_TOKEN } from '../constants';

export const token = () => {
    const payload = {
        sub: 'VALIDO',
        iat: moment().unix(),
        exp: moment().add(10, 's').unix()
    };

    return jwt.encode(payload, SECRET_TOKEN)
}