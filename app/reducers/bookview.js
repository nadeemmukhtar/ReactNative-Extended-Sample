import {handleActions} from 'redux-actions';
import {updatebookview} from './syncActions';

const initialState = {};

export default handleActions(
    {
        [updatebookview]: (state, action) => {
           // console.log('bookViewData..........', action.payload);
            return {...action.payload};
        }
    },
    initialState
);
