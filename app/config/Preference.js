import DefaultPreference from 'react-native-default-preference';

export const PrefKeys = {
    USER_ID: 'user_id',
    USER_IMAGE: 'user_image',
    USER_NAME: 'user_name',
    USER_OBJ: 'user_obj',
    USER_LAT: 'user_lat',
    USER_LNG: 'user_lng',
    LOGIN_TYPE: 'login_type',
    DEVICE_TOKEN: 'device_token',
    DEVICE_ID: 'device_id',
    RECENT_SEARCHES: 'recent_search',
};


export function setPrefs(object) {
    DefaultPreference.setMultiple(object).then(function () {
    //    console.log('All saved');
    });
}

export function setPref(key, value) {
    DefaultPreference.set(key, value).then(function () {
        console.log(key + ' saved');
    });
}

export function getPref(key, callback) {
    console.log(key + ' getting');
    DefaultPreference.get(key).then(function (value) {
        callback(value);
    });
}