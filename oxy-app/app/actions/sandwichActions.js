import Meteor from 'react-native-meteor'

// =============================================

export const ADD_SANDWICH = 'ADD_SANDWICH';
export const DELETE_SANDWICHES = 'DELETE_SANDWICHES';
export const DELETE_SANDWICH = 'DELETE_SANDWICH';

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

export function deleteSandwiches(){
    return (dispatch) => {
        const data  = '';
        dispatch({type: DELETE_SANDWICHES, data:data});

        // CALL API
        Meteor.call('Sandwiches.deleteAll', { data }, (err, res) => {
            console.log('Sandwiches.deleteAll', err, res);
        });
        console.log("Sandwiches deleted");
    };
}

export function deleteSandwich(sandwich){
    return (dispatch) => {
        const data  = sandwich;
        dispatch({type: DELETE_SANDWICH, data:data});

        // CALL API
        Meteor.call('Sandwiches.delete', { data }, (err, res) => {
            console.log('Sandwiches.delete', err, res);
        });
        console.log("Sandwiche deleted");
    };
}
