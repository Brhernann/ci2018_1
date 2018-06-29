import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Welcome from '../components/welcome';
import Thanks from '../components/thanks/index';
import NotFound from '../components/NotFound/index';
import Register from '../components/Register/index';
import RegisterMail from '../components/Register/saveMail/index';

import Questionary_1 from '../components/Questionary/1_';
import key_validator from '../components/Questionary/1_/valid'
import Questionary_2 from '../components/Questionary/2_';
import Questionary_3 from '../components/Questionary/3_';

export default () => (
	<HashRouter>
		<Switch>
			<Route path="/" exact component={Welcome} />
			<Route path="/Bienvenido/:id" exact component={key_validator} />
			<Route path="/Cuestionario" exact component={Questionary_1} />
			<Route path="/Seleccion" exact component={Questionary_2} />
			<Route path="/Pregunta" exact component={Questionary_3} />
			<Route path="/Gracias/:string" exact component={Thanks} />
			<Route path="/Registro" exact component={Register} />
			<Route path="/RegistroMail" exact component={RegisterMail} />
			<Route component={NotFound} />
			{/* <Route path="" render={ NotFound }/> */}
		</Switch>
	</HashRouter>
)