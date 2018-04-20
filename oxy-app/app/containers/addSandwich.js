//@flow
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { MyButton } from '../components/myButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { withNavigation } from 'react-navigation';

import * as Actions from '../actions/sandwichActions';
import * as Style from '../assets/style';

// ================================================================
type Props = {
}

type State = {

}

class AddSandwich extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            errorMsg: ''
        };
    }

    componentDidMount() {

    }

    handleAddItem = () => {
        if (this.state.name != '') {
            this.props.ajoutSandwich(this.state.name);
        } else {
            this.setState({errorMsg: 'Entrez un nom pour créer un nouveau sandwich'})
        }
        
    }

    setName(name) {
        this.setState({name});
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#F5F5F5'}}>
                <FormLabel>Name</FormLabel>
                <FormInput 
                    onChangeText={(name) => this.setName(name)}
                    value = {this.state.name}
                />
                <FormValidationMessage>{this.state.errorMsg}</FormValidationMessage>
                <MyButton handler={this.handleAddItem} text='Ajouter un sandwich' />
            </View>
        );
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
// Just by doing this, we will have access to the actions defined in our actions files.
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

// Connect everything
let connection = connect(mapStateToProps, mapDispatchToProps)(AddSandwich);
export default withNavigation(connection);
