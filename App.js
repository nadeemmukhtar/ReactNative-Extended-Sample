import React from 'react';
import { Provider } from 'react-redux';
// import { StatusBar } from 'react-native';
import configureStore from './app/store/configureStore';
import AppNavigatior from './app/config/AppNavigatior';
// eslint-disable-next-line no-multiple-empty-lines
// import SearchList from './screen/SearchResult/SearchList';

const store = configureStore();

const App = () => (
<Provider store={store} >
        <AppNavigatior />
    </Provider>
);

export default App;
