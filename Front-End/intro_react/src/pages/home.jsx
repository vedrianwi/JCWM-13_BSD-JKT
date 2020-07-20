import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homeData : 'this is state from home'
        }
    }

    render () {
        const container = {
            paddingTop : '10%',
            width : '100%',
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
            margin : 'auto',
        }
        return (
            <div style={container}>
                <h1>Welcome to react tutorial page</h1>
                <Link to={{ pathname: '/todo', state : {fromHome : this.state.homeData}}}>
                    <Button color='primary'>go to todo</Button>
                </Link>
                <Button color='warning'>
                    <Link to='/todo'>todo</Link>
                </Button>
            </div>
        )
    }
}

export default Home