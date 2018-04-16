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

import * as Actions from '../actions';

// =============================================================

type Props = {}

type State = {
    isShownBtn: boolean,
    loading: boolean,
    data: any
}

class Home extends Component<Props, State> {
    state = {
        isShownBtn: false,
        loading: false,
        data: null
    }

    constructor(props) {
        super(props)
    }

    onPressAccount = () => {
        this.setState({ isShownBtn: true })
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else if(this.state.isShownBtn) {
            return (
                <View style={{flex:1, backgroundColor: '#D3D3D3', paddingTop:20}}>
                    <Text>Hello World</Text>
                </View>
            )
        } else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                <Button
                    onPress={this.onPressAccount}
                    title="Account"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                </View>
            );
        }
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

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
