/* eslint-disable no-undef */
import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking, Image, Platform} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import {dimens} from "../../config/styles";
import {getStatusBarHeight} from "react-native-status-bar-height";

export default class AppIntro2 extends Component {

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: null
    };

    static _renderDotIndicator() {
        return (
            <PagerDotIndicator
                dotStyle={{
                    borderRadius: 10,
                    height: 8,
                    width: 8,
                    marginBottom: 40,
                    margin: 5,
                    backgroundColor: '#626466',

                }}
                selectedDotStyle={{
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    height: 8,
                    width: 8,
                    margin: 5,
                    marginBottom: 40,

                }}
                pageCount={3}
            />
        );
    }

    navigateToLogin() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Splash'
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <IndicatorViewPager
                    style={{flex: 1}}
                    indicator={AppIntro2._renderDotIndicator()}>
                    <View style={{flex: 1}}>
                        <ImageBackground
                            style={styles.bacgroundImage}
                            source={require('../../assets/images/bg-img-x2.jpg')}>
                            <View style={styles.innerView}>
                                <Text style={styles.text}>The better way to manage and
                                    let your property</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1}}>
                        <ImageBackground
                            style={styles.bacgroundImage}
                            source={require('../../assets/images/bg-img-x2.jpg')}>
                            <View style={styles.innerView}>
                                <Text style={styles.text}>The better way to manage and let your property</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1}}>
                        <ImageBackground
                            style={styles.bacgroundImage}
                            source={require('../../assets/images/bg-img-x2.jpg')}>
                            <View style={styles.innerView}>
                                <Text style={styles.text}>The better way to manage and let your property</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('WebView', {
                                            url: 'https://app.howsy.com/register',
                                            title: 'Sign Up'
                                        });
                                    }}>
                                    <View style={styles.buttonView}>
                                        <Text style={styles.buttonText}>Sign Up for Free</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                </IndicatorViewPager>
                {Platform.OS === 'ios' ?
                    <TouchableOpacity
                        style={{position: 'absolute', top: getStatusBarHeight(true)}}
                        onPress={() => this.props.navigation.goBack(null)}>
                        <Image
                            style={styles.backButton}
                            source={require('../../assets/images/back-white.png')}
                        />
                    </TouchableOpacity> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerView: {
        flex: 1,
        marginTop: dimens.screenHeight * 0.57,
    },
    bacgroundImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        color: '#ffffff',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontFamily: "HKGrotesk-Regular",
    },
    buttonView: {
        height: 50,
        width: dimens.screenWidth-30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50
    },
    buttonText: {
        fontSize: 20,
        color: '#000000',
        alignSelf: 'center',
        fontFamily: "HKGrotesk-Regular",
        // textAlign: 'center',
    },
    backButton: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        margin: 10
    },
});
