import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store'
import Home from './app/containers/home'
import Account from './app/containers/account'
import AddSandwich from './app/containers/addSandwich'


import Meteor from 'react-native-meteor';
import * as Settings from './app/config/settings.js';

// ==================================== //
Meteor.connect(Settings.SERVER_URL);


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}
