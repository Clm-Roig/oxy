import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import Home from './app/containers/home';
import Menu from './app/containers/menu';
import AddSandwich from './app/containers/addSandwich';
import Login from './app/containers/login';

import AppNavigation from './app/AppNavigation';

import Meteor from 'react-native-meteor';
import * as Settings from './app/config/settings.js';

// ==================================== //
Meteor.connect(Settings.SERVER_URL);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}
