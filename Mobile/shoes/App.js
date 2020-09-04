import React from 'react';
import { StyleSheet } from 'react-native';

// setup redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './src/reducers';

// create global store
const globalStore = createStore(
    allReducers,
    {},
    composeWithDevTools(applyMiddleware(ReduxThunk)),
);

// main navigation
import MainNavigation from './src/navigations/main_nav';

const App = () => {
    return (
        <Provider store={globalStore}>
            <MainNavigation />
        </Provider>
    );
};

const styles = StyleSheet.create({
    root: { flex: 1 },
});

export default App;
