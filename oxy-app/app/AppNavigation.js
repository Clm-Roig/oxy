//@flow
// Basé sur ce tutoriel : https://shift.infinite.red/react-navigation-drawer-tutorial-a802fc3ee6dc

import React from 'react';
import { Text } from 'react-native';

import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Login from './containers/login';
import Home from './containers/home';
import Account from './containers/account';

// drawer stack
const DrawerStack = DrawerNavigator({
    screen1: { screen: Login },
    screen2: { screen: Home },
    screen3: { screen: Account },
})

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'green'},
        title: 'Logged In to your app!',
        headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
    })
})

// login stack
const LoginStack = StackNavigator({
    loginScreen: { screen: Login }
}, {
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {backgroundColor: 'red'},
        title: 'You are not logged in'
    }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack'
})

export default PrimaryNav;
