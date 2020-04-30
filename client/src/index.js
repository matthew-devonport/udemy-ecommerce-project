import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'gestalt/dist/gestalt.css';

import App from './components/App';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout'
import Navbar from './components/Navbar'
import Brews from './components/Brews'

import registerServiceWorker from './registerServiceWorker';


const Root = () => (
    <Router>
        <React.Fragment>
        <Navbar />
        <Switch>
            <Route component={App} exact path ="/" />
            <Route component={SignIn} path ="/signin" />
            <Route component={SignUp} path ="/signup" />
            <Route component={Checkout} path ="/checkout" />
            <Route component={Brews} path ="/:brandId" />
        </Switch>
        </React.Fragment>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
