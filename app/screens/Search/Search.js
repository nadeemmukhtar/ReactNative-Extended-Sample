import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Platform, Alert, ActivityIndicator} from 'react-native';
// import {getStatusBarHeight} from 'react-native-status-bar-height';
import SearchField from './SearchField'
import {getStatusBarHeight} from "react-native-status-bar-height";
import {setPref, setPrefs, getPref, PrefKeys} from '../../config/Preference'
import {dimens, fontWeight} from "../../config/styles";
import {_} from 'lodash';
import Loader from '../../components/Loader'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.lat = 0;
        this.log = 0;
        //  this.recentSearches=[]
        this.state = {
            checkState: false,
            latlng: null,
            animating: true,
            latitude: null,
            longitude: null,
            error: null,
        };
        this.onPlaceSelect = this.onPlaceSelect.bind(this);
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: null,
    };
    CheckState = () => {
        this.setState({checkState: true})
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                //     console.log(position);
                this.recentSearches[0].geometry = {
                    location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                };
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
        );
    }

    closeActivityIndicator = () => setTimeout(() => this.setState({animating: false}), 6000);

    componentWillMount() {
        getPref(PrefKeys.RECENT_SEARCHES, function (arg) {
            if (!arg) {
                this.recentSearches = [{description: 'Nearby'}];
                //setPref(PrefKeys.RECENT_SEARCHES, JSON.stringify(this.recentSearches));
            } else {
                this.recentSearches = JSON.parse(arg);
            }
        }.bind(this));
    }

    onPlaceSelect(data, details) {
        let postcode = (data.postcode && data.postcode !== '') ? data.postcode : '';
        let city = (data.city && data.city !== '') ? data.city : '';
        let i = 0;
        if (data.types) {
            for (i = 0; i < data.types.length; i++) {
                if (data.types[i] === 'locality') {
                    city = data.structured_formatting.main_text
                } else if (data.types[i] === 'postal_code') {
                    postcode = data.structured_formatting.main_text
                }
            }
        }
        let recentSearch = {
            description: data.description,
            geometry: details.geometry,
            postcode: postcode,
            city: city
        };
        //console.log('Detail=============', JSON.stringify(details));
        //console.log('data===============', JSON.stringify(data));
        // console.log('Recent Search======', JSON.stringify(recentSearch));
        let a = _.size(this.recentSearches);
        if (a === 3) {

            if (recentSearch.description !== 'Nearby') {
                if (_.find(this.recentSearches, {'description': recentSearch.description}) === undefined) {
                    this.recentSearches.splice(1, 1);
                    // this.recentSearches.pop(this.recentSearches[0]);
                    this.recentSearches.push(recentSearch);
                }
            }
            setPref(PrefKeys.RECENT_SEARCHES, JSON.stringify(this.recentSearches));
        }
        else if (a > 0) {
            if (recentSearch.description !== 'Nearby') {
                if (_.find(this.recentSearches, {'description': recentSearch.description}) === undefined) {
                    this.recentSearches.push(recentSearch);
                }
            }
            setPref(PrefKeys.RECENT_SEARCHES, JSON.stringify(this.recentSearches));
        }
        if (recentSearch.description === 'Nearby' && this.state.error === 'User denied access to location services.') {
            Alert.alert('Alert', 'You denied access to location services. Please Allow it in settings');
        } else if (city === '' && postcode === '' && recentSearch.description !== 'Nearby') {
            Alert.alert('Oops!!', 'We couldn\'t find required parameters (city/postcode) from the current search. Please try another input or switch to Nearby search.')
        } else {
            this.props.navigation.navigate('SearchList', {
                data: recentSearch
            })
        }
    }

    render() {
        return (

            <View style={styles.container}>

                {Platform.OS === 'ios' && this.state.checkState === false ?
                    <TouchableOpacity
                        style={{position: 'absolute', top: getStatusBarHeight(true), left: 0}}
                        onPress={() => this.props.navigation.goBack(null)}>
                        <Image
                            style={styles.backButton}
                            source={require('../../assets/images/black.png')}
                        />
                    </TouchableOpacity> : null}
                {this.state.checkState === false ?
                    <View style={{margin: 30}}>
                        <Text style={styles.liveText}>Tell us where do you want to live!</Text>
                        <TouchableOpacity
                            onPress={this.CheckState}>
                            <View style={styles.innerview}>
                                <Text style={styles.inputText}> Find me a home in...</Text>
                            </View>
                        </TouchableOpacity>

                    </View> :

                    <SearchField onPlaceSelect={this.onPlaceSelect}
                                 recentSearches={this.recentSearches}
                                 onPress={name => this.props.navigation.navigate(name)}
                    />}
                <View>
                    {/*<ActivityIndicator*/}
                    {/*animating = {animating}*/}
                    {/*color = '#bc2b78'*/}
                    {/*size = "large"*/}
                    {/*style = {styles.activityIndicator}/>*/}

                    <Text style={styles.text}>Howsy</Text>
                </View>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        paddingTop: getStatusBarHeight(true)
    },
    innerview: {
        borderLeftWidth: 2,
        paddingLeft: 5,
        marginLeft: dimens.screenWidth * 0.22,
        borderColor: 'black',
        // alignSelf: 'center'
    },
    inputText: {
        width: 250,
        fontSize: 20,
        color: '#cccccc'
    },
    text: {
        fontSize: 25,
        color: '#000000',
        alignSelf: 'center',
        margin: 35,
        fontWeight: 'bold',
        // textAlign: 'center',
    },
    liveText: {
        fontSize: 20,
        color: '#000000',
        marginBottom: 40,
        fontWeight: 'bold',
        alignSelf: 'center',

    },
    backButton: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        margin: 10
    },
    activityIndicator: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});
