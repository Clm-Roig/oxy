import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Meteor from 'react-native-meteor';
const SERVER_URL = 'ws://localhost:3000/websocket';

export default class App extends React.Component {

    componentWillMount() {
        Meteor.connect(SERVER_URL);
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>Bienvenue sur Oxy !</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
