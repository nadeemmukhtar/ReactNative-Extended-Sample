/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform,
    Image
} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import {dimens} from "../../config/styles";
import {NavigationActions} from "react-navigation";
import {getStatusBarHeight} from "react-native-status-bar-height";

export default class AppIntro extends Component {

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
                    margin: 5,
                    marginBottom: 40,
                    backgroundColor: '#626466'
                }}
                selectedDotStyle={{
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    height: 8,
                    width: 8,
                    margin: 5,
                    marginBottom: 40,
                }}
                pageCount={2}
            />
        );
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <IndicatorViewPager
                    style={{flex: 1}}
                    // eslint-disable-next-line no-undef
                    indicator={AppIntro._renderDotIndicator()}>
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
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.props.navigation.navigate('Search')
                            }}>
                            <ImageBackground
                                style={styles.bacgroundImage}
                                source={require('../../assets/images/bg-img-x2.jpg')}>
                                <View style={styles.innerView}>
                                    <Text style={styles.text}>The better way to manage and
                                        let your property</Text>
                                </View>
                            </ImageBackground>
                        </TouchableWithoutFeedback>
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
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "HKGrotesk-Regular",

        // textAlign: 'center',
        // marginBottom: 360,
    },
    backButton: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        margin: 10
    },
});
