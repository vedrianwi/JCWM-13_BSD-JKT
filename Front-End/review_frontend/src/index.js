import React from 'react'
import ReactDOM from 'react-dom'

// import main component
import App from './App'

// setup redux
import { createStore } from 'redux' // bikin global store
import { Provider } from 'react-redux' // nyambungin antara react dengan redux/global-store

// import reducer
import allReducer from './reducers'

// create global store
const globalStore = createStore(allReducer)

// console log global storae
globalStore.subscribe(() => console.log('GLOBAL STORE : ', globalStore.getState()))

// render
ReactDOM.render(
    <Provider store={globalStore}>
        <App/>
    </Provider>
    , document.getElementById('root')
)