// import Module
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// create class component
class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            items : [
                "Hand body lotion SPF 50++",
                "Nike Shoes",
                "Samsung Galaxy Z-Fold 2",
                "Pencil 2B"
            ]
        }
    }

    handleTouch = () => {
        console.log("Touched.")
        console.log({
            name  : "alee",
            age : 19,
            hobby : "dance"
        })
    }

    render () {
        return (
            <View style={styles.root}>
                {/* <Text style={styles.title}>Shopping List</Text>
                <Text style={styles.subTitle}>by alee0510</Text>
                <View style={styles.list}>
                    <Text style={styles.text}>Body lotion SPF 30++</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>Facial Wash</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>Facial Mask</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>Shoes</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>Pencil 2B</Text>
                </View> */}

                <Header title="Shopping List" subtitle="by alee0510"/>
                {/* <List item="Hand body lotion SPF 50++"/>
                <List item="Shoes"/>
                <List item="Samsung Galaxy Note 20"/>
                <List item="Pencil 2B"/> */}

                { this.state.items.map((value, index) => <List key={index} item={value}/>)}

                {/* component with props children */}
                <Container>
                    <Text>Add New List</Text>
                    <Text>Add New List</Text>
                </Container>

                {/* component with props function */}
                <CustomButton title="plus" onTouch={this.handleTouch}/>
            </View>
        )
    }
}

// HANDLE PROPS LITERAL TEXT?
function Header (props) {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subtitle}</Text>
        </View>
    )
}

function List (props) {
    return (
        <View style={styles.list}>
            <Text style={styles.item}>{props.item}</Text>
        </View>
    )
}

// PROPS CHILDREN ?
function Container (props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

// PROPS ? FUNCTION
function CustomButton (props) {
    return <Button title={props.title} onPress={props.onTouch} color="#e056fd"/>
}

// create style object
const styles = StyleSheet.create({
    root : {
        padding : 20,
        backgroundColor : "#dff9fb",
        height : "100%"
    },
    title : {
        fontSize : 32,
        fontWeight : 'bold',
        marginBottom : 5
    },
    subTitle : {
        fontSize : 18,
        marginBottom : 15
    },
    list : {
        padding : 10,
        marginTop : 5,
        marginBottom : 5,
        backgroundColor : '#f6e58d',
        borderRadius : 5
    },
    item : {
        fontSize : 14
    },
    container : {
        margin : 10,
        padding : 10,
        backgroundColor : "#badc58",
        borderRadius : 5
    }
})

// export component
export default App