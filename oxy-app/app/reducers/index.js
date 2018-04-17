import { combineReducers } from 'redux'

import { ADD_SANDWICH } from "../actions/"
import Meteor from 'react-native-meteor'

let dataState = { data: [], loading:true }

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_SANDWICH:
            const name = action.data + Math.floor(Math.random() * 10);
            Meteor.call('Sandwiches.addOne', { name }, (err, res) => {
                console.log('Sandwiches.addOne', err, res);
            });
            console.log("Sandwich inserted")
            return state;

        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
