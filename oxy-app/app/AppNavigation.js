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
    Home: { screen: Home },
    Account: { screen: Account },
    Login: { screen: Login }
})

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#a2a'},
        title: 'Oxy',
        headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
    })
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    drawerStack: { screen: DrawerNavigation }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerStack'
})

export default PrimaryNav;
