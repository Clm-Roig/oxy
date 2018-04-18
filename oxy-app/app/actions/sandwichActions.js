import Meteor from 'react-native-meteor'

// =============================================

export const ADD_SANDWICH = 'ADD_SANDWICH';

export function addSandwich(){
    return (dispatch) => {
        const data  = "SandwichData";
        dispatch({type: ADD_SANDWICH, data:data});

        // CALL API

    };
}
