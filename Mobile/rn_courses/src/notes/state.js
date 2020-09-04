// import Module
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// create class component
class App extends React.Component {
    // state
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }
    // state = {
    //     count : 0
    // }

    handlePlus = () => {
        // ganti state pakai setState
        this.setState({ count : this.state.count + 1})
        // this.state.count ++
        // this.state.count = this.state.count + 1
    }

    handleMinus = () => {
        this.setState({ count : this.state.count - 1 })
    }

    render () {
        return (
            <View style={styles.root}>
                <Text style={styles.title}>Handle State</Text>
                <Text style={styles.count}>Count : {this.state.count}</Text>

                {/* event triger using onpress */}
                <Button title="plus" color="#4834d4" onPress={this.handlePlus}/>
                <Button title="minus" color="#eb4d4b" onPress={this.handleMinus}/>
            </View>
        )
    }
}

// NOTES :
// state tidak bisa di rubah secara langsung
// state hanya bisa di rubah menggunakan fungsi/method this.setState()
// akses value menggunakan this.state.[key]

// HANDLE PROPS ?

// create style object
const styles = StyleSheet.create({
    root : {
        padding : 20
    },
    title : {
        fontSize : 20,
        marginBottom : 10,
        fontWeight : 'bold'
    },
    count : {
        fontSize : 18,
        marginBottom : 10
    },
    button : {
        margin : '5px 0px'
    }
})

// export component
export default App