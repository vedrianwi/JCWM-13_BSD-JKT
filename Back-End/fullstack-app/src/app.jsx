import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { KeepLogin } from './actions'

import Navbar from './components/navbar'

import Home from './pages/home'
import Product from './pages/products'
import Category from './pages/category'
import Login from './pages/login'
import Register from './pages/register'
import Verification from './pages/verification'
import Profile from './pages/profile'

class App extends React.Component {
    componentDidMount () {
        this.props.KeepLogin()
    }

    render () {
        return (
            <div>
                <Navbar/>
                <Route path="/" component={Home} exact/>
                <Route path="/product" component={Product}/>
                <Route path="/category" component={Category}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/verification" component={Verification}/>
                <Route path="/profile" component={Profile}/>
            </div>
        )
    }
}

export default connect(null, { KeepLogin })(App)