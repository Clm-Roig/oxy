import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/Store';

function getStores() {
    return [
        Store,
    ];
}

function getState() {
    return {
        todos: Store.getState(),
    };
}

export default Container.createFunctional(AppView, getStores, getState);
