import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

import { LogOut } from '../actions'

import '../styles/navbar.css'

class NavBar extends React.Component {
    handleLogOut = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        this.props.LogOut()
    }

    render () {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Demo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/product" className="link">
                            <Nav.Item>Product</Nav.Item>
                        </Link>
                        <Link to="/category" className="link">
                            <Nav.Item>Category</Nav.Item>
                        </Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Link to="/profile" className="link">
                            <Nav.Item href="#">{this.props.username ? this.props.username : 'user'}</Nav.Item>
                        </Link>
                        {
                            this.props.username ?
                            <Button onClick={this.handleLogOut}>LogOut</Button> :
                            <Link to='/login'>
                                <Button>Login</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (globalStore) => {
    return {
        username : globalStore.user.username
    }
}

export default connect(mapStateToProps, { LogOut })(NavBar)