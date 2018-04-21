//@flow
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { MyButton } from '../components/myButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import * as Actions from '../actions/sandwichActions';

// ================================================================
type Props = {
}

type State = {
    name: string,
    errorMsg: string,
    validationMsg: string
}

class AddSandwich extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            errorMsg: '',
            validationMsg: ''
        };
    }

    componentDidMount() {

    }

    handleAddItem = () => {
        if (this.state.name != '') {
            // TODO : checker la valeur retourner pour savoir si ça a marché ou pas.
            this.props.addSandwichWithName(this.state.name);
            this.setState({
                name: '',
                validationMsg: 'Sandwich ajouté !'
            });
            setTimeout(() => {
                this.setState({
                    validationMsg: ''
                });
            }, 2000);
        } else {
            this.setState({errorMsg: 'Entrez un nom pour créer un nouveau sandwich'})
        }
    }

    setName(name) {
        this.setState({name: name});
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#F5F5F5'}}>
                <FormLabel>Nom du sandwich</FormLabel>
                <FormInput
                onChangeText={(name) => this.setName(name)}
                value = {this.state.name}
                />
                <FormValidationMessage>{this.state.errorMsg}</FormValidationMessage>
                <MyButton handler={this.handleAddItem} text='Ajouter un sandwich' />

                <Text style={{color:'#5c5'}}>{this.state.validationMsg}</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddSandwich);
