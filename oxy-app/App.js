import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Meteor from 'react-native-meteor';
const SERVER_URL = 'ws://192.168.1.66:3000/websocket';

export default class App extends React.Component {

    componentWillMount() {
        Meteor.connect(SERVER_URL);
    }

    handleAddItem() {
        const name = Math.floor(Math.random() * 10); // just generate some random number
        Meteor.call('Items.addOne', { name }, (err, res) => {
            // Do whatever you want with the response
            console.log('Items.addOne', err, res);
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to React Native + Meteor Oxy App!
                </Text>

                <TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
                    <Text>Add Item</Text>
                </TouchableOpacity>

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
    button: {
        padding: 10,
        backgroundColor: '#c5c5c5',
    },
});
