import React from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './build'

const oxyApp = () => <App />

AppRegistry.registerComponent('oxyApp', () => oxyApp);
