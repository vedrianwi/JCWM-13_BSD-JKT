// import Module
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// FLEXBOX
const App = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text1}>1</Text>
            <Text style={styles.text2}>2</Text>
            <Text style={styles.text3}>3</Text>
            <Text style={styles.text4}>4</Text>
            <Text style={styles.text5}>5</Text>
            <Text style={styles.text6}>6</Text>
            <Text style={styles.text7}>7</Text>
        </View>
    )
}

// define style
const styles = StyleSheet.create({
    root : {
        // height : '100%',
        // width : '100%',
        flex : 1,
        // padding : 10,
        display : 'flex', // by default flexdirection column
        flexDirection : 'row',
        justifyContent : "flex-start", // arrange position according to main axis,
        alignItems : "flex-start", // arrange position according to cross axis
        // flexWrap : "wrap",
        // alignContent : "flex-end",
    },
    text1 : {
        backgroundColor : '#1abc9c',
        textAlign : 'center',
        textAlignVertical : 'center',
        // flex : 1 // “fill” over the available space along your main axis.
        width : 50,
        height : 50,
        // alignSelf : "flex-start",
        flexGrow : 1,
        position : "absolute",
        bottom : 10,
        right : 10
    },
    text2 : {
        backgroundColor : '#3498db',
        textAlign : 'center',
        textAlignVertical : 'center',
        // flex : 2,
        width : 50,
        height : 50
    },
    text3 : {
        backgroundColor: '#f1c40f',
        textAlign : 'center',
        textAlignVertical : 'center',
        // flex : 1,
        width : 50,
        height : 50,
        // alignSelf : "flex-end"
    },
    text4 : {
        backgroundColor : '#e74c3c',
        textAlign : 'center',
        textAlignVertical : 'center',
        // flex : 2,
        width : 50,
        height : 50
    },
    text5 : {
        textAlign : 'center',
        textAlignVertical : 'center',
        width : 50,
        height : 50,
        backgroundColor : '#8e44ad'
    },
    text6 : {
        textAlign : 'center',
        textAlignVertical : 'center',
        width : 50,
        height : 50,
        backgroundColor : '#27ae60'
    },
    text7 : {
        textAlign : 'center',
        textAlignVertical : 'center',
        width : 50,
        height : 50,
        backgroundColor : '#2980b9',
        flexGrow : 1
    }
})
export default App