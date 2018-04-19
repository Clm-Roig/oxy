//@flow
// Basé sur ce tutoriel : https://shift.infinite.red/react-navigation-drawer-tutorial-a802fc3ee6dc
import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from './containers/login';
import Home from './containers/home';
import Menu from './containers/menu';
import AddSandwich from './containers/addSandwich';

// drawer stack
const DrawerStack = DrawerNavigator({
    'Accueil': { screen: Home },
    'Menu': { screen: Menu },
    'S\'identifier': { screen: Login },
    'Ajouter un sandwich': { screen: AddSandwich }
});

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#559'},
        title: 'Oxy',
        headerLeft:
            <Icon name="menu" size={40} onPress= { () => {
                if (navigation.state.index === 0) {
                    navigation.navigate('DrawerOpen')
                } else {
                    navigation.navigate('DrawerClose')
                }
            }} />
    })
});

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    drawerStack: { screen: DrawerNavigation },
    Accueil: { screen: Home },
    Menu: { screen: Menu },
    Login : { screen: Login },
    AddSandwich : { screen: AddSandwich }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerStack'
});

export default PrimaryNav;
