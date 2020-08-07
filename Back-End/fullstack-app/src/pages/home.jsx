import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import '../styles/home.css'

class Home extends React.Component {
    render () {
        return (
            <div className="home-container">
                <h1>Home Page</h1>
                <Link to="/product">
                    <Button>Go To Product</Button>
                </Link>
            </div>
        )
    }
}

export default Home