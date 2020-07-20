// import module
import React from 'react'
import { Route } from 'react-router-dom'

// import components
import NavbarReactstrap from './components/navbar'

// import pages
import Home from './pages/home'
import Todo from './pages/todo'
import FormApp from './pages/formApp'
import RequestAPI from './pages/requestAPI'

class App extends React.Component {
    render () {
        return (
            <div>
                <NavbarReactstrap/>
                <Route path='/' component={Home} exact/>
                <Route path='/todo' component={Todo}/>
                <Route path='/form' component={FormApp}/>
                <Route path='/request' component={RequestAPI}/>
            </div>
        )
    }
}


export default App