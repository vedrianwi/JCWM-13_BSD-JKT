import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoData : 'this is state from todo'
        }
    }

    render () {
        console.log(this.props.location)
        console.log(this.props.location.state)
        return (
            <div>
                <h1>Halaman Todo</h1>
                {/* <h2>{this.props.location.state.fromHome}</h2> */}
                <Link to={{ pathname: '/', state : {fromTodo : this.state.todoData}}}>
                    <Button color='success'>back to home</Button>
                </Link>
            </div>
        )
    }
}

export default Todo