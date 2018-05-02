import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import jwt from 'jwt-simple';
import moment from 'moment'
import { SECRET_TOKEN } from '../config/constants';

import Welcome from '../components/Welcome'; 
import Thanks from '../components/thanks'; 
import NotFound from '../components/NotFound';
import Register from '../components/flow_1/Register';

import Questionary_1 from '../components/flow_2/Questionary/1_'; 
import key_validator from '../components/flow_2/Questionary/1_/valid'
import Questionary_2 from '../components/flow_2/Questionary/2_'; 
import Questionary_3 from '../components/flow_2/Questionary/3_'; 

const createToken = () => {

	const payload = {
		sub: 'VALIDO',
		iat: moment().unix(),
		exp: moment().add(1, 'minute').unix(),
	}

	return jwt.encode(payload, SECRET_TOKEN)
}

console.log(createToken())

export default () => (
	<BrowserRouter>
	<Switch>
	<Route path="/" exact component={ Welcome }/>
	<Route path="/Bienvenido/:id" exact component={ key_validator }/>
	<Route path="/Cuestionario" exact component={ Questionary_1 }/>
	<Route path="/Seleccion" exact component={ Questionary_2 }/>
	<Route path="/Pregunta" exact component={ Questionary_3 }/>
	<Route path="/Gracias" exact component={ Thanks }/>
	<Route path="/Registro" exact component={ Register }/>
	<Route component={ NotFound } />
	{/* <Route path="" render={ NotFound }/> */}
	</Switch>
	</BrowserRouter>
)