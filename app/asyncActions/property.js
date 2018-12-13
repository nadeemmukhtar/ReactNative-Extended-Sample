import {updateAppState, updateProperties}
    from '../reducers/syncActions';
import {apiFetch} from '../utils/network';
import {constants} from '../config/constants';

export const getProperties = (offset, limit, city, postcode, radiusFilter, priceFilter, bedroomFilter) => {
    return (dispatch, getState) => {
        dispatch(updateAppState({isLoading: true}));
        let customFilter = '';
        if (radiusFilter !== '') {
            customFilter = radiusFilter;
        } else if (city !== '') {
            customFilter = `&filter[3][0]=where&filter[3][1]=city&filter[3][2]=${city}`;
        }else if (postcode !== '') {
            postcode = postcode.replace(' ', '');
            customFilter = `&filter[3][0]=where&filter[3][1]=post_code&filter[3][2]=${postcode}`;
        }

        //State available=3, offer-pending=10, moving=8, under offer=4
        apiFetch('properties?limit=' + limit +
            '&include[]=photos' +
            '&include[]=tenancy_preferences' +
            '&order_by[0]=marketing_rent' +
            '&filter[0][0]=whereIn' +
            '&filter[0][1]=state_id' +
            '&filter[0][2][0]=3' +
            '&filter[0][2][1]=4' +
            '&filter[0][2][2]=10' +
            '&filter[0][2][3]=8' +
            '&offset=' + offset + customFilter +
            bedroomFilter + priceFilter,
            constants.accessToken)
            .then(list => {
                dispatch(updateAppState({isLoading: false}));
                dispatch(updateProperties(list));
            })
            .catch(err => {
                dispatch(updateAppState({
                    appHasError: true, errorMessage: err.message, isLoading: false
                }));
            });
    };
};