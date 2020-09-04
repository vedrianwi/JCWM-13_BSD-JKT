// import Module
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create class component
class App extends React.Component {
    render () {
        return (
            // View mirip dengan DIV yang ada di HTML
            // styling using inline style
            <View style={{
                padding:20, 
                height : '100%', 
                width : '100%', 
                backgroundColor : 'pink'
                }}>
                <Text style={{fontSize : 32, marginBottom : 10}}>Hello React Native</Text>
                <Text style={styles.h1}>My Name is alee</Text>
                <Text style={styles.h2}>I'm Software Developer</Text>
            </View>
        )
    }
}

// create style object using StyleSheet
// css rule berlaku di StyleSheet
const styles = StyleSheet.create({
    h1 : {
        fontSize : 16,
        marginBottom : 20,
        color : 'red'
    },
    h2 : {
        fontSize : 32,
        backgroundColor : 'yellow',
        padding : 10
    }
})

// export component
export default App