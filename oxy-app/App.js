import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import * as Settings from './app/config/settings.js';

class App extends Component {

    componentWillMount() {
        Meteor.connect(Settings.SERVER_URL);
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
                    Welcome to Oxy App!
                </Text>
                <Text style={styles.instructions}>
                    Item Count: {this.props.count}
                </Text>

                <TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
                    <Text>Add Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('items');
    return {
        count: Meteor.collection('items').find().length,
    };
}, App);

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
