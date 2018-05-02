import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import jwt from 'jwt-simple';
import moment from 'moment'
import { SECRET_TOKEN } from '../config/constants';

import Welcome from '../components/Welcome'; 
import Questionary_1 from '../components/Questionary/1_'; 
import Questionary_2 from '../components/Questionary/2_'; 
import Questionary_3 from '../components/Questionary/3_'; 
import Questionary_4 from '../components/Questionary/4_'; 
import Register from '../components/Register';
import NotFound from '../components/NotFound';

const createToken = () => {

	const payload = {
		sub: 'VALIDO',
		iat: moment().unix(),
		exp: moment().add(1, 'minute').unix(),
	}

	return jwt.encode(payload, SECRET_TOKEN)

}

const ValidateToken = (TOKEN) => {

	let decodeToken = jwt.decode(TOKEN, SECRET_TOKEN);

	console.log(decodeToken);

}

const TOKEN = createToken();

ValidateToken(TOKEN);

export default () => (
	<BrowserRouter>
	<Switch>
	<Route path="/" exact component={ Welcome }/>
	<Route path="/Cuestionario" exact component={ Questionary_1 }/>
	<Route path="/Seleccion" exact component={ Questionary_2 }/>
	<Route path="/Pregunta" exact component={ Questionary_3 }/>
	<Route path="/Gracias" exact component={ Questionary_4 }/>
	<Route path="/Registro" exact component={ Register }/>
	<Route path="/NotFound" exact component={ NotFound }/>
	{/* <Route path="" render={ NotFound }/> */}
	</Switch>
	</BrowserRouter>
)