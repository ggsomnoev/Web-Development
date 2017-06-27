import {Route, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';
import Home from './view/HomeView'
import Login from './controller/LoginController'
import Register from './controller/RegisterController'


ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App}/> {/*Links are located here*/}
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
