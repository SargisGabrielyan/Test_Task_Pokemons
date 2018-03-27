import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const store = createStore(reducer, {
    pokemonList : [],
    paginationList : [],
});

export default store;