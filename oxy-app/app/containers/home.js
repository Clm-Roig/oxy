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

import * as Actions from '../actions/sandwichActions';
import * as Style from '../assets/style';

// ================================================================
type Props = {
    sandwiches: []
}

type State = {

}

class Home extends Component<Props, State> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    handleAddItem = () => {
        this.props.addSandwich();
    }

    handleDeleteSandwiches = () => {
        this.props.deleteSandwiches();
    }

    handleDeleteSandwich(sandwich) {
        this.props.deleteSandwich(sandwich);
    }

    render() {
        var count = 0;
        if(this.props.sandwiches != null) {
             count = this.props.sandwiches.length;
        }
        return (
            <View style={{flex:1, backgroundColor: '#F5F5F5'}}>

            <MyButton handler={this.handleAddItem} text='Ajouter un sandwich aléatoire' />
            <MyButton handler={this.handleDeleteSandwiches} text='Supprimer tout' />

            <Text style={Style.textBig}>
            Nb de sandwichs: {count}
            </Text>

            <MeteorListView
            collection="sandwiches"
            renderRow={this.renderSandwich}
            />

            </View>
        );
    }

    renderSandwich = (sandwich) => {
        return (
            <View style={{marginBottom:10}}>
                <Text>{sandwich.name}</Text>
                <TouchableOpacity onPress={() => this.handleDeleteSandwich(sandwich)}>
                    <Text style = {{backgroundColor:'#e55', fontSize:16, padding:10, textAlign:'center'}}>Supprimer</Text>
                </TouchableOpacity>
            </View>
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
// Just by doing this, we will have access to the actions defined in our actions files.
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

// Connect everything
let connection = connect(mapStateToProps, mapDispatchToProps)(Home);

export default createContainer(() => {
    Meteor.subscribe('sandwiches');
    return {
        sandwiches: Meteor.collection('sandwiches').find(),
    };
}, connection);
