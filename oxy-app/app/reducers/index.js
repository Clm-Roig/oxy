import { combineReducers } from 'redux';

import { ADD_ITEM, DATA_AVAILABLE } from "../actions/" //Import the actions types constant we defined in our actions
import Meteor from 'react-native-meteor';

let dataState = { data: [], loading:true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {

        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;

        case ADD_ITEM:
            const name = action.data + Math.floor(Math.random() * 10); // just generate some random number
            Meteor.call('Items.addOne', { name }, (err, res) => {
                console.log('Items.addOne', err, res);
            });
            console.log("item inserted")
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
