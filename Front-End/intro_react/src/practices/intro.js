// importt module
import React from 'react' // import module react
import ReactDOM from 'react-dom'

/* React Elements : are obejct that represent DOM (Document Object Model)
it like a variable in JavaScript, instead hold a value any data type (string, number, Boolean, etc),
it can hold an HTML elements too (<tag>textNode<tag/>).*/
// var div = "<div>hello</div>"
// output.innerHTML = div

var element = <h1>Hello react</h1>
var element2 = <div><h1>Hello</h1><h2>World</h2></div>
var element3 = (
    <div>
        <h1>Hello React, My name is alee</h1>
    </div>
)

var button = <button>click me!</button>

// JSX => extension => javascript + HTML
// JSX with JavaScript expression => {}
// backtic => `string ${x+1}`
var element4 = <div>{element} JSX</div>

// styling ? 1. inline style => add style directly to hmtl component, 2. css
var button2 = <button style={{backgroundColor : "blue", color: "white"}}>button with stle ver 1</button>

// js object for styling
var buttonStyle = {
    backgroundColor : "aqua",
    fontSize : "12px",
    padding : "10px",
    borderRadius : "50px"
}

var button3 = <button style={buttonStyle}>Click me! 2</button>

// object data
let item = {
    name : "cheese",
    price : 5,
    url : "https://www.ecosystemmarketplace.com/wp-content/uploads/2019/11/Swiss-Cheese.jpg"
}

let elementItem = <p>{item.name} : ${item.price}</p>
let image = <img src={item.url} alt="cheese-img" style={{width : '200px'}}/>

// components => component its a modular element of ui in the web design
// react 2 type of compoents => functional components and class component
// Functional Components : Functional Components are just js functions that output React Elements
// NOTE : use UpperCamelCase to name the function
function Elem () {
    return (
        <div>
            <h1>This is react component build using js function : functional component</h1>
        </div>
    )
}

// in JS function has input called input parameter, function add (x, y) {...}
// in react component (functional component), function has input called props (properties)
function Wellcome (props) {
    console.log(props)
    return <h1>Hello {props.name}, wellcome to react!</h1>
}

function ListToDo (props) {
    return (
        <ul>
            <li>{props.car}</li>
            <li>{props.motor}</li>
            <li>{props.handphone}</li>
        </ul>
    )
}

function ShoppingTitle (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Total number of items : {props.numberOfItem}</h2>
        </div>
    )
}

function ListItem (props) {
    return <li>{props.item}</li>
}

function ShoppingList (props) {
    return (
        <div>
            <h3>{props.subTitle}</h3>
            <ul>
                {/* <ListItem item={props.items[0]}/>
                <ListItem item={props.items[1]}/>
                <ListItem item={props.items[3]}/> */}
                {
                    props.items.map(value => <ListItem item={value}/>)
                }
            </ul>
        </div>
    )
}

function ShoppingApp () {
    return (
        <div>
            <ShoppingTitle title="My Shopping List" numberOfItem='9'/>
            <ShoppingList subTitle="food" items={['Apple', 'Cheese', 'Ramen', 'Burger']}/>
            <ShoppingList subTitle='clothes' items={['T-shirt', 'Pants', 'Hat']}/>
            <ShoppingList subTitle='supplies' items={['Notebook', 'Paper', 'Smartwacth']}/>
            <ShoppingList subTitle='supplies' items={['Notebook', 'Paper', 'Smartwacth']}/>
            <ShoppingList subTitle='supplies' items={['Notebook', 'Paper', 'Smartwacth']}/>
        </div>
    )
}

// class component => component that build using js class and inherit from React class
class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'Ali',
            age : '25',
            hobby : 'Dance',
            number : 0
        }
        // binding the function
        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    }

    // NOTE : change class state
    // this.state.number = 1
    // this.setState({number : new value})

    increment = () => {
        // console.log('increment')
        this.setState({number : this.state.number+=1})
    }
    
    decrement = () =>{
        // console.log('decrement')
        this.setState({number : this.state.number-=1})
    }

    // lifecylce method => method that original came from React.Component
    componentDidMount () {
        console.log('after firts render')
    }
    
    // NOTE : componentDidMount() will automatically invoke once after firts render
    componentDidUpdate () {
        console.log('did update is invoked')
    }
    // NOTE : componentDidUpdate() will invoke after setState or if there any change in state or component


    render () {
        // console.log(this.props)
        return (
            <div>
                <h1>This is class component </h1>
                {/* <h2>Hello, {this.props.name}</h2> */}
                <h2>Hello, my name is {this.state.name}</h2>
                <h2>I'm {this.state.age} old</h2>
                <h2>I love {this.state.hobby}</h2>

                {/* Event handling */}
                <button onClick={this.increment}>+</button>
                <h2>{this.state.number}</h2>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

// render
ReactDOM.render (
    <React.Fragment>
        {/* react elements */}
        {/* {element}
        {element2}
        {element3}
        {button}
        {element4}
        {button2}
        {button3}
        {elementItem}
        {image} */}

        {/* react component */}
        {/* <Elem/>
        <Wellcome name="alee"/>
        <ListToDo car="ferarri" motor="Honda Beat" handphone="iphone 12"/> */}
        {/* <ShoppingApp/> */}
        <Hello name="alee"/>
    </React.Fragment>
    ,document.getElementById('root')
)