import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  addTodo(text) {
    Dispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },
};

export default Actions;
