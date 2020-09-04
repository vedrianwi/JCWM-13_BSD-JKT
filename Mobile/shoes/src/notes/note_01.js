import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

class App extends React.Component {
    // local state
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        // kalau misal kita mau merubah state tapi masih bergantung dengan
        // nilai state sebelumnya => functional state
        this.setState({ count: this.count + 1 });
        this.setState({ count: this.count + 1 });
        this.setState({ count: this.count + 1 });

        this.setState((prevstate) => prevstate.count + 1);
        this.setState((prevstate) => prevstate.count + 1);
        this.setState((prevstate) => prevstate.count + 1);
    };

    render() {
        return (
            <View>
                <Text>Hello React</Text>
                <Button title="click me!" onPress={this.handleClick} />
            </View>
        );
    }
}

export default App;

// NOTES:
// REVIEW REDUX & REDUX THUNK
// REDUX VS LOCAL STATE ?
/*
 -- LOCAL STATE --
 + data disimpan dalam bentuk object [state]
 + cara akses data menggunakan : this.state[nama_state] / this.state.nama_state
 + cara merubah state : function => this.setState(), sifatnya Async
 + tidak bisa di akses oleh component lain

 OBJECT COMPOSITION => 
 let obja = { nama : 'alee', umur : 20 }
 let objb = { name : 'olaf }
 let objc = Object.assign({}, obja, objb)
 console.log(objc) => { nama : 'olaf', umur : 20 }

 FUNCTIONAL COMP
 + const [namaState, fungsiUntukMerubahState] = React.useState(nilaiAwal)

 -- GLOBAL STORE --
 + data bisa di akses oleh semua komponen yang di bungkus oleh <Provider></Provider>
   dan connect dengan react-redux
 + akses data menggunakan connect pake react-redux : this.props.nama_global_store
 + cara merubah data di global store / redu : function => action
 + baik merubah ataupun mengambil data kita harus connect to react-redux
 
 * NOTES : data di local state dan di redux tidak bisa di ubah secara langsung
*/
