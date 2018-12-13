import {constants} from '../config/constants';

const extractResult = async res => {
    const resp = await res.json();
    // console.log('REQUEST RESPONSE=====================', resp);
    return Promise.resolve(resp.data);
};

const extractError = err => {
    return Promise.reject(err.response);
};

const getAuthHeadersObj = token => {

    return {
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type' : 'application/json'
        }
    };
};

export const apiFetch = (url, token) => {
    const requestUrl = constants.kBaseUrl + url;
    console.log('Request url:', requestUrl);
    return fetch(requestUrl, getAuthHeadersObj(token))
        .then(extractResult)
        .catch(extractError);
};

export const apiFetchPost = (url, body, token) => {
    let requestData=[];
    requestData = {
        method: 'POST',
        body: JSON.stringify(body)
    };
    requestData.headers = getAuthHeadersObj(token).headers;
    const requestUrl = constants.kBaseUrl + url;
    console.log('Request url:', requestUrl);
    //console.log('Request Body',requestData);
    return fetch(requestUrl, requestData)
        .then(extractResult)
        .catch(extractError);
};