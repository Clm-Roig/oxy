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
    'Accueil': { screen: Home },
    'Compte': { screen: Account },
    'S\'identifier': { screen: Login }
});

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#559'},
        title: 'Oxy',
        headerLeft:
            <Text onPress= { () => {
                if (navigation.state.index === 0) {
                    navigation.navigate('DrawerOpen')
                } else {
                    navigation.navigate('DrawerClose')
                }
            }}>Menu</Text>
    })
});

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    drawerStack: { screen: DrawerNavigation }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerStack'
});

export default PrimaryNav;
