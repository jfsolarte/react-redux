import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;