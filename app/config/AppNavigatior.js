/* eslint-disable no-multiple-empty-lines */
import GlobalFont from 'react-native-global-font';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import {View, StatusBar} from 'react-native';
import Splash from '../screens/Splash/Splash';
import AppIntro from '../screens/OnBoarding/AppIntro';
import AppIntro2 from '../screens/OnBoarding/AppIntro2';
import WebScreen from "../screens/WebView/WebScreen";
import Search from '../screens/Search/Search';
import SearchField from '../screens/Search/SearchField';
import SearchList from '../screens/SearchResult/SearchList';
import ShareData from '../screens/SearchResult/ShareData';
import SearchDetail from '../screens/SearchResult/SearchDetail';
import Loader from "../components/Loader";

const AppNavigator = createStackNavigator({
    Splash: {screen: Splash},
    AppIntro: {screen: AppIntro},
    AppIntro2: {screen: AppIntro2},
    WebView: {screen: WebScreen},
    Search: {screen: Search},
    SearchField: {screen: SearchField},
    SearchList: {screen: SearchList},
    ShareData: {screen: ShareData},
    SearchDetail: {screen: SearchDetail}
});


class AppNavigatorContainer extends Component {

    componentDidMount() {
        let fontName = 'HKGrotesk-Medium';
        GlobalFont.applyGlobal(fontName)
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    hidden={false}
                />
                <AppNavigator/>
                {this.props.isLoading ? <Loader/> : null}
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        isLoading: state.appState.isLoading
    }
}

export default connect(
    mapStateToProps,
    null
)(AppNavigatorContainer)
