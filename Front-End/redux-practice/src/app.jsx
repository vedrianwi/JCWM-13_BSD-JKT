import React from 'react'
import { connect } from 'react-redux'

// import actons
import { increment, decrement } from './actions'

class App extends React.Component {
    render () {
        return (
            <div>
                <button type="button" onClick={ () => this.props.decrement() }>-</button>
                <h1>{this.props.number}</h1>
                <button type="button" onClick={ () => this.props.increment() }>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number : state.counter
    }
}

export default connect(mapStateToProps, { increment, decrement })(App)