import React, {Component} from 'react';
import {View, StyleSheet, WebView, TouchableOpacity, Image, Text} from 'react-native';
import {getStatusBarHeight} from "react-native-status-bar-height";

export default class WebScreen extends Component {
// eslint-disable-next-line no-undef
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            title: '',
        }
    }

    componentDidMount() {
        const {params} = this.props.navigation.state;
        this.setState({url: params.url});
        this.setState({title: params.title});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <View style={{flexDirection: 'row', flex: 1, height: 50}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack(null)}
                        >
                            <Image
                                style={styles.backButton}
                                source={require('../../assets/images/black.png')}
                            />
                        </TouchableOpacity>
                        <Text
                            numberOfLines={1} style={styles.nearByText}>{this.state.title}</Text>
                    </View>
                </View>
                <WebView
                    style={styles.WebViewContainer}
                    // eslint-disable-next-line react/jsx-boolean-value
                    javaScriptEnabled={true}
                    // eslint-disable-next-line react/jsx-boolean-value
                    domStorageEnabled={true}
                    source={{uri: this.state.url}}
                />

            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: getStatusBarHeight(true)
    },
    WebViewContainer: {
        flex: 1,
        // alignSelf: 'center'
    },
    headerView: {
        height: 50,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
    },
    backButton: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginLeft: 5,
        marginTop: 15
    },
    nearByText: {
        flex: 1,
        color: '#000000',
        fontSize: 17,
        textAlign: 'left',
        marginLeft: 8,
        marginTop: 13,
    },

});

