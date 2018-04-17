//@flow
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { myButton } from '../components/myButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Meteor, { createContainer } from 'react-native-meteor';

import GenerateForm from 'react-native-form-builder';

import * as Actions from '../actions';
import * as Style from '../assets/style';

// ================================================================
type Props = {
    form: any
}

type State = {

}

// Champs du formulaire
const fields = [
    {
        type: 'text',
        name: 'user_name',
        required: true,
        icon: 'ios-person',
        label: 'Username',
    },
    {
        type: 'password',
        name: 'password',
        icon: 'ios-lock',
        required: true,
        label: 'Password',
    },
    {
        type: 'picker',
        name: 'country',
        mode: 'dialog',
        label: 'Select Country',
        defaultValue: 'INDIA',
        options: ['US', 'INDIA', 'UK', 'CHINA', 'FRANCE'],
    },
];

class AddSandwich extends Component<Props, State> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    handleAddItem = () => {
        const formValues = this.props.form.getValues();
        console.log('FORM VALUES', formValues);
        //this.props.addSandwich();
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                <Text style={Style.textBig}>
                    Ajouter un nouveau sandwich
                </Text>

                <GenerateForm
                    ref={ (c) => { this.props.form = c; }}
                    fields={fields}
                />

                <MyButton handler={this.handleAddItem} text='Ajouter un sandwich' />

            </View>
        );
    }

    renderSandwich(sandwich) {
        return (
            <Text>{sandwich.name}</Text>
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

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(AddSandwich);
