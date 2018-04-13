import { combineReducers } from 'redux';

import { LOAD_ACCOUNT, DATA_AVAILABLE } from "../actions/" //Import the actions types constant we defined in our actions

let dataState = { data: [], loading:true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        case LOAD_ACCOUNT:
                console.log('WHO');
                state = Object.assign({}, state, { data: action.data, loading:false });
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
