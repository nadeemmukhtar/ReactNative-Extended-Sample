import {updateAppState, updatebookview} from '../reducers/syncActions';
import {apiFetchPost} from '../utils/network';
import {constants} from '../config/constants';


export const getBookView = (property) => {
    return (dispatch) => {
        dispatch(updateAppState({isLoading: true}));
        apiFetchPost('applications',
            {
                property: property.id,
                source: 6
            },
            constants.accessToken)
            .then(data => {
                dispatch(updateAppState({isLoading: false}));
                dispatch(updatebookview(data));
            })
            .catch(err => {
                dispatch(updateAppState({
                    appHasError: true, errorMessage: err.message, isLoading: false
                }));
            });
    };
};