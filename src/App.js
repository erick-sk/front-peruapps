import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Views/Home';
import Profile from './components/Views/Profile';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/profile" component={Profile} />
			</Switch>
		</Router>
	);
}

export default App;
