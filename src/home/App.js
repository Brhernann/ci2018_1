import React, { Component } from 'react';
import Routes from '../routes';
//import {ThemeConsumer} from '../context';
import logo from '../images/locoA.jpg';
import './app.css';

export default class App extends Component {
    render() {
        //  console.log(ThemeConsumer._defaultValue)
        return (
            <div className="App">
                <div className="App-header">
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
                <div className="App-intro">
                    <Routes />
                </div>

            </div>
        )

    }

}
