export const ADD_ITEM = 'ADD_ITEM';

export function addItem(){
    console.log("Action ADD ITEM called")
    return (dispatch) => {
        //First test
        const data  = "newItem";
        dispatch({type: ADD_ITEM, data:data});
    };
}
