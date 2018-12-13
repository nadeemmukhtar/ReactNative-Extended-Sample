import { handleActions } from 'redux-actions';
import { updateProperties } from './syncActions';

const initialState = [];

export default handleActions(
    {
        [updateProperties]: (state, action) => {
            //console.log('UpdateProperties from reducer ?..........', action.payload);
            return [...action.payload];
        }
    },
    initialState
);
