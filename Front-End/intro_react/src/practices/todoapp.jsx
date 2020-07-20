// import module
import React from 'react'

class TodoApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todoDatabase : ['learn react js', 'buy a milk', 'sleep']
        }
    }

    showList = () => {
        return this.state.todoDatabase.map((value, index) => {
            return (
                <li key={index}>
                    {value}
                    <button onClick={() => this.remove(index)}>❌</button>
                </li>
            )
        })
    }

    add = () => {
        // console.log('add')
        let todoList = this.refs.todo.value

        let temp = this.state.todoDatabase
        temp.push(todoList)

        // add todoList to database
        this.setState({ todoDatabase : temp })
        this.refs.todo.value = ''
    }

    remove = (index) => {
        // console.log(index)
        let temp = this.state.todoDatabase
        temp.splice(index, 1)

        this.setState({ todoDatabase : temp })
    }
    
    render () {
        return (
            <div>
                <h1>To-do App</h1>
                <input ref="todo" placeholder="add your task"/>
                <button onClick={this.add}>add</button>

                {/* show list */}
                <ul>{this.showList()}</ul>
            </div>
        )
    }
}

// export class component
export default TodoApp

// NOTE : component
// 1. functional component => js function => return HTML element
function ReactFuncComponent (props) {
    return <h1>React functional component : {props.param}</h1>
}
{/* <ReactFuncComponent param="hello"/> */}

// 2. class component => js class syntax => inherit dari React.Component => component
// lifecylce method => setState(), componentDidMount(), ...

// namaFungsi()

// () => true
// () => {
//     return true
// }