import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import GooglePlacesInput from './GooglePlacesInput';


export default class SearchField extends Component {

    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        header: null,
    };

    CkeckState = () => {
        // this.props.checkState= false
        this.setState({checkState: this.props.checkState = false})
    };

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.innerview}>
                    <TouchableOpacity
                        onPress={() => this.props.onPress('Splash')}>
                        <Text style={{color: '#000000', marginLeft: 10, marginRight: 10, marginTop: 10}}>Cancel</Text>
                        <View style={styles.seperator}/>
                    </TouchableOpacity>
                    <GooglePlacesInput
                        onPlaceSelect={this.props.onPlaceSelect}
                        recentSearches={this.props.recentSearches}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: getStatusBarHeight(true)
    },
    seperator: {
        height: 2,
        width: 42,
        marginLeft: 10,
        backgroundColor: '#000000',
    },
    innerview: {
        flex: 1
    },
    inputText: {
        height: 50,
        width: 250,
        fontSize: 25,
        color: '#000000',
        borderWidth: 2,
        borderRightColor: 'white',
        borderLeftColor: 'black',
        borderBottomColor: 'white',
        borderTopColor: 'white',
        // fontcolor: '#f2f0ef',
        alignSelf: 'center',
        // marginLeft: 140,
    },
    nearByView: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#fcfcfc',

        margin: 5,
    },
    nearbyButton: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        marginTop: 18,
        marginBottom: 18,
        marginLeft: 15
    },
    nearByText: {
        color: '#000000',
        fontSize: 17,
        marginTop: 18,
        marginBottom: 18,
        marginLeft: 5
    }
});
