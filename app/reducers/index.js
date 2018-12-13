import {combineReducers} from 'redux';
import propertyList from './propertyList';
import bookview from './bookview';
import appState from './appState';

const rootReducer = combineReducers({
    propertyList,
    bookview,
    appState
});

export default rootReducer;
