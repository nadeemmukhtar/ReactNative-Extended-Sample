import React, {Component} from 'react';
import {View, Image, StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native';
import {getStatusBarHeight} from "react-native-status-bar-height";
import {dimens} from "../../config/styles";

export default class Splash extends Component {
// eslint-disable-next-line no-undef
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ImageBackground
                style={styles.bacgroundImage}
                source={require('../../assets/images/bg-img-x2.jpg')}>
                <View style={{flex: 1, marginBottom:35}}>
                <View style={styles.innerView}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AppIntro')}
                    >
                        <View style={styles.rentButton}>
                            <Image
                                style={styles.imageButton}
                                source={require('../../assets/images/member.png')}
                            />
                            <Text style={styles.buttonText}> I want to find a property</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AppIntro2')}
                    >
                        <View style={styles.rentButton}>
                            <Image
                                style={styles.imageButton}
                                source={require('../../assets/images/house.png')}
                            />
                            <Text style={styles.buttonText}> I have a property to rent</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(true)
    },
    innerView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 100,
    },
    bacgroundImage: {
        height: '100%',
        width: '100%',
    },
    findButton: {
        marginTop: 10,
    },
    rentButton: {
        height: 50,
        width: dimens.screenWidth-40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        marginTop: 12,
    },
    buttonText: {
        color: '#000000',
        fontSize: 22,
        fontFamily: "HKGrotesk-Regular",
    },
    imageButton: {
        height: 18,
        width: 18,
        marginRight: 10,
    }

});
