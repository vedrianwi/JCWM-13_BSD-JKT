import React from 'react'
import ReactDOM from 'react-dom'

// import main app
import App from './app'

// setup redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import reducer
import allReducers from './reducers'

// create global store
let globalStore = createStore(allReducers)

ReactDOM.render(
    <Provider store={globalStore}>
        <App/>
    </Provider>
    ,document.getElementById('root')
)