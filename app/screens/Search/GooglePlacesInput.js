import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {constants} from "../../config/constants";

const GooglePlacesInput = ({onPlaceSelect, recentSearches}) => {
    let componentRef;
    return (
        <GooglePlacesAutocomplete
            ref={ref => componentRef = ref}
            placeholder='Where?'
            minLength={1} // minimum length of text to search
            autoFocus={true}
            selectionColor={'black'}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details) => { // 'details' is provided when fetchDetails = tru
                onPlaceSelect(data, details);
                componentRef._handleChangeText('');
            }}
            getDefaultValue={() => ''}
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: constants.googleApiKey,
                types: ['(cities)'], // default: 'geocode'
                components: ('country:uk')
            }}

            styles={{
                textInputContainer: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    marginLeft: 120
                },
                container: {
                    height: 250,
                },
                separator: {
                    marginTop: 12
                },
                description: {
                    height: 250,
                    fontSize: 20,
                    color: 'black',
                    // fontWeight: 'bold'
                },
                textInput: {
                    height: 50,
                    fontSize: 25,
                    color: '#000000',
                    // fontcolor: '#f2f0ef',
                    alignSelf: 'center',
                },
                predefinedPlacesDescription: {
                    fontSize: 20,
                    // height: 200,
                    flexDirection: 'row',
                    // backgroundColor: '#ffffff',
                    margin: 5,
                    color: 'black',
                    // fontWeight: '5'
                }
            }}

            currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
            // currentLocationLabel="Nearby"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                // rankby: 'distance',
                //   types: 'postal_code'
            }}

            //filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            predefinedPlaces={recentSearches}
            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
            // renderRightButton={() => <Text>C</Text>}
        />
    );
}

export default GooglePlacesInput