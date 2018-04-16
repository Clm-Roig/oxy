export const ADD_SANDWICH = 'ADD_SANDWICH';

export function addSandwich(){
    return (dispatch) => {
        const data  = "newSandwich";
        dispatch({type: ADD_SANDWICH, data:data});
    };
}
