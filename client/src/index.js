import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';

import App from './components/App';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout'

import registerServiceWorker from './registerServiceWorker';


const Root = () => (
    <Router>
        <Switch>
            <Route component={App} path ="/" />
            <Route component={SignIn} path ="/signin" />
            <Route component={SignUp} path ="/signup" />
            <Route component={Checkout} path ="/checkout" />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
