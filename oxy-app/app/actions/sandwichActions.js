import Meteor from 'react-native-meteor'

// =============================================

export const ADD_SANDWICH = 'ADD_SANDWICH';

export function addSandwich(){
    return (dispatch) => {
        const data  = "SandwichData";
        dispatch({type: ADD_SANDWICH, data:data});

        // CALL API
        const name = data + Math.floor(Math.random() * 100);
        Meteor.call('Sandwiches.addOne', { name }, (err, res) => {
            console.log('Sandwiches.addOne', err, res);
        });
        console.log("Sandwich inserted");
    };
}
