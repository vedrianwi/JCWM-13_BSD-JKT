// import module
import React from 'react'

class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value : ''
        }
    }

    // componentDidMount () {
    //     window.addEventListener('scroll', () => console.log('scrolling'))
    // }

    handleClick = () => {
        console.log(this.refs.selection.value)
    }

    handleChange = () => {
        console.log('change')
        console.log(this.refs.selection.value)
    }

    render () {
        console.log(this.state.value)
        return (
            <div>
                <h1>Hello</h1>
                {/* <div style={{height : "200vh", backgroundColor : "yellow"}}></div> */}
                <select ref="selection" onChange={this.handleChange}>
                    <option value="option-1">one</option>
                    <option value="option-2">two</option>
                    <option value="option-3">three</option>
                </select>
                <input ref="example" placeholder='example' onChange={() => this.setState({value : this.refs.example.value})}/>
                <button onClick={this.handleClick}>click me!</button>
            </div>
        )
    }
}


export default Event