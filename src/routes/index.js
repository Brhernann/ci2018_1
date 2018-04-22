import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from '../components/Welcome'; 
import Questionary from '../components/Questionary'; 
import NotFound from '../components/NotFound';

export default () => (
	<BrowserRouter>
	<Switch>
	<Route path="/" exact component={ Welcome }/>
	<Route path="/cuestionario" exact component={ Questionary }/>
	<Route path="/caca" exact component={ NotFound }/>
	{/* <Route path="" render={ NotFound }/> */}
	</Switch>
	</BrowserRouter>
)