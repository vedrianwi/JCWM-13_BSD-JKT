// import Module
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// create class component
// class App extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             count : 0
//         }
//     }

//     componentDidMount () {
//         console.log('component did mount.')
//     }

//     componentDidUpdate () {
//         console.log('component did update.')
//     }

//     handleState = () => {
//         this.setState({ count : this.state.count + 1})
//     }

//     render () {
//         return (
//             <View>
//                 <Text>Hello React</Text>
//                 <Text>{this.state.count}</Text>
//                 <Button title="click me!" onPress={this.handleState}/>
//             </View>
//         )
//     }
// }

// NOTES: Class Component => LifeCyle Methods => fungsi yg otomasi di panggil
// 1. componentDidMount () => dipanggil sekali setelah render pertama
// 2. componentnDidUpdate () => selalu di panggil saat ada perubahan component setelah render ()
// 3. componentWillUnmount () => dipanggil sekali saat komponent akan di terminate / keluar dari komponent

// render () akan di triger saat terjadi perubahan props dan state

// REACT_HOOK IN FUNCTIONAL COMPONENT
const App = () => {
    // create state in functional component
    const [count, setCount] = React.useState(0)
    const [data, setData] = React.useState([
        { name : "alee", age : 19, key : 1},
        { name : "olaf", age : 17, key : 2},
        { name : "elas", age : 21, key : 3}
    ])

    // define function inside functional component
    const handlePlus = () => {
        // merubah state
        setCount((prevcount) => prevcount + 1)
        setData((prevdata) => [...prevdata, { name : "anna", age : 17, key : count}])
    }

    const handleMinus = () => {
        setCount((prevcount) => prevcount - 1)
    }

    const renderData = () => {
        return data.map((item, index) => <Text key={index}>{item.name}</Text>)
    }

    // side effect
    React.useEffect(() => {
        console.log('side effect is running.')
    })

    return (
        <View style={styles.root}>
            <Text>Hello React</Text>
            <Text>count : {count}</Text>
            <Text>Data : </Text>
            {renderData()}
            <Button title="plus" onPress={handlePlus}/>
            <Button title="minus" color="pink" onPress={handleMinus}/>
        </View>
    )
}

// NOTES :
// side effect (useEffect) akan otomatis di jalanka setiap kali fungsi merender komponent

const styles = StyleSheet.create({
    root : {
        padding : 10
    }
})
// export component
export default App