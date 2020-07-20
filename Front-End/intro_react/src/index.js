// import module
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// import boostrap
import 'bootstrap/dist/css/bootstrap.min.css'

// import css
import './index.css'

// import main App
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root')
)