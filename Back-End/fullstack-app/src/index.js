import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './app'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// setup redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from  'react-redux'
import ReduxThunk from 'redux-thunk'
import Reducers from './reducers'

const globalStore = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
globalStore.subscribe(() => console.log('global store : ', globalStore.getState()))

ReactDOM.render(
    <Provider store={globalStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)