import {Link} from 'react-router-dom';
import Header from './common/Header'
import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header>
                    <Link to="/" className="navbar-brand">Home</Link>
                    <Link to="/login" className="navbar-brand">Login</Link>
                    <Link to="/register" className="navbar-brand">Register</Link>
                </Header>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
