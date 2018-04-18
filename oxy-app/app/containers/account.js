// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Button,
    ActivityIndicator
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';


import { MenuButton } from '../components/menuButton';

import * as Actions from '../actions/sandwichActions';
import * as Style from '../assets/style';

// =============================================================

type Props = {
    count:number
}

type State = {
    validation: boolean,
    loading: boolean,
    data: any
}

class Account extends Component<Props, State> {
    state = {
        validation: false,
        loading: false,
        data: null
    }

    constructor(props) {
        super(props);
    }

    validateOrder = () => {
        //TODO : Action addOrder(sandwich)
    }

    cancelOrder = () => {
        this.setState({ validation: false });
    }

    handlePressSandwich = () => {
        console.log("OK");
        this.setState({ validation: true });
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else if(!this.state.validation) {
            return (
                <View style={{flex:1, backgroundColor: '#D3D3D3'}}>
                    <Text style={Style.title}>Faites votre choix</Text>
                    <MeteorListView
                        collection="sandwiches"
                        renderRow={this.renderSandwich}
                    />
                </View>
            )
        } else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:50}}>
                    <Text>Exemple de validation</Text>
                    <Button
                        onPress={this.validateOrder}
                        title="Validate your choice"
                        color="#22FF22"
                        accessibilityLabel="Product selected"
                    />
                    <Button
                        onPress={this.cancelOrder}
                        title="Cancel"
                        color="#FF2222"
                        accessibilityLabel="Product selected"
                    />
                </View>
            );
        }
    }

    renderSandwich(sandwich) {
        return (
            <MenuButton handler={this.handlePressSandwich} text={sandwich.name} />
        )
    }

};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

// Connect everything
let connection = connect(mapStateToProps, mapDispatchToProps)(Account);

export default createContainer(() => {
    Meteor.subscribe('sandwiches');
    return {
        count: Meteor.collection('sandwiches').find().length,
    };
}, connection);


const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});
