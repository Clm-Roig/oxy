import { combineReducers } from 'redux'

import { ADD_SANDWICH } from "../actions/sandwichActions"
import Meteor from 'react-native-meteor'

let dataState = { data: [], loading:true }

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_SANDWICH:
            // TODO : add sandwich to the state



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
