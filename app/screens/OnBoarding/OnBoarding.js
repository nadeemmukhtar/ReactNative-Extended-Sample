import React from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    image: {

        width: '100%',
        height: '100%',
        resizeMode: 'contain'

    },
    text: {
        fontSize: 25,
        color: 'red',
        backgroundColor: 'transparent',
        // textAlign: 'center',
        marginBottom: 360,
    },
    dot: {
        backgroundColor: '#626466'
    }

});

const slides = [
    {
        key: 'somethun',
        image: require('../../assets/images/bg-img-x2.jpg'),
        imageStyle: styles.image,
        text: 'Description.Say something cool.\nSay something cool',
        textStyle: styles.text,
    },
    {
        key: 'somethun-dos',
        text: 'Other cool stuff',
        textStyle: styles.text,
        // image: require('../../assest/images/bg-img-x2.jpg'),
        // imageStyle: styles.image,
    },
];

export default class OnBoarding extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            // showRealApp: false
        };
    }

//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({ showRealApp: true });
//   }
    render() {
        return (
            <AppIntroSlider
                dotStyle={styles.dot}
                slides={slides}
                //   onDone={this._onDone}
            />
        );
    }
}
