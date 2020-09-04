// import Module
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create class component
class App extends React.Component {
    // state
    render () {
        return (
            <View>
                {/* Call Function Component */}
                <ComponentA/>
                <ComponentA/>
                <ComponentB/>
                <ComponentA/>
                <ComponentB/>
                {/* component with props */}
                <Hello name="alee" hobby="dancing"/>
                <Hello name="steven" hobby="playing game"/>
            </View>
        )
    }
}

// create function component
// component dipakai untuk membuat reusable
function ComponentA () {
    return (
        <View>
            <Text>Ini Component A</Text>
        </View>
    )
}

const ComponentB = () => {
    return (
        <View>
            <Text>Ini Component B</Text>
        </View>
    )
}

// create component with props (input)
const Hello = (props) => {
    // props bentuknya object
    return (
        <View>
            <Text>Hello, {props.name}</Text>
            <Text>Hobby, {props.hobby}</Text>
        </View>
    )
}

// props ?

// create style object using StyleSheet
// css rule berlaku di StyleSheet

// export component
export default App