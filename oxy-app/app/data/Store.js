import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './ActionTypes';
import TodoDispatcher from './Dispatcher';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_TODO:
        // Do nothing for now, we will add logic here
        return state;

      default:
        return state;
    }
  }
}

export default new Store();
