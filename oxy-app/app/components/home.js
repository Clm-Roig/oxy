//@flow
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import * as Actions from '../actions';

import * as Style from '../assets/style';

// ================================================================
type Props = {
    count: number
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

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>

                <TouchableOpacity style={Style.button} onPress={this.handleAddItem}>
                    <Text style={Style.textBig}>Add Item</Text>
                </TouchableOpacity>

                <Text style={Style.textBig}>
                    Nb de sandwichs: {this.props.count}
                </Text>

                <MeteorListView
                    collection="sandwiches"
                    renderRow={this.renderSandwich}
                />

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
let connection = connect(mapStateToProps, mapDispatchToProps)(Home);

export default createContainer(() => {
    Meteor.subscribe('sandwiches');
    return {
        count: Meteor.collection('sandwiches').find().length,
    };
}, connection);
