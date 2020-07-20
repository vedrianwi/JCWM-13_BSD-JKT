import React from 'react' // initialize thi file as part of react
import { connect } from 'react-redux'

// import actions
import { plus, minus } from './actions'

class App extends React.Component {
    // create local state
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            validate : null,
            visible : true
        }
    }

    plus = () => {
        // ubah state
        // this.setState({ count : this.state.count + 1 })
        
        // this.state.count++ / this.state.count += 1 ERROR
        // this.state.count = this.state.count + 1
        // this.state.count
        if (this.props.count > 10) {
            console.log('count > 10')
            return
        }

        this.props.plus(3)
    }

    minus = () => {
        // this.setState({ count : this.state.count - 1})
        if (this.props.count < 0) return
        this.props.minus(2)
    }

    render () {
        return (
            <div>
                <h1>Hello React</h1>
                <button type="button" onClick={this.plus}>+</button>
                <h3>count : {this.props.count}</h3>
                <button type="button" onClick={this.minus}>-</button>
            </div>
        )
    }
}

// define reducer mana yang mau diambil
const mapStateToProps = (globalStore) => {
    return {
        count : globalStore.countReducer.count
    }
}


export default connect(mapStateToProps, { plus, minus })(App)

// dafault => export utama App, import app => diwakili oleh class App
/** NOTE  :
OBJECT => obj.key atau obj["key"]
STATE => immutable, 
    - tempat penyimpanan data namanya this.state
    - tidak bisa diubah secara langsung, this.state.count = 1 *ERORR
    - hanya bisa dirubah mengunakan : 
        this.setState({ key1 : value baru1, key2 : value baru 2 })
    - aksess nilai => this.state

FUNGSI : (method)
    - this.fungsi() => fungsi langsung di jalankan tanpa menunggu event (click, double clik, dll)
    - this.fungsi => fungsi akan jalan kalau ada event, 
    - kalau fungsi butuh parameter/input : (input) => this.fungsi(input)
ARROW FUNCTION : auto has this, fungsi biasa harus this.fungsi().bind(this)
GLOBAL STORE : immutable
    - tempat penyimpanan data namanya reducer
    - akses / ngambil value lewat this.props.key
    - ganti value : 
        ERROR => this.props.count += 1
        TRUE => use action (fungsi) => this.props.action(input)
    - dapat di aksess di semua component
        * syarat : CONNECT => connect dengan react-redux (penyambung redux dan component)
          - connect(reducer, action) => connect reducer and action, action dan reducer dalam bentuk object
          - connect(reducer) atau connect(null, action)

NOTES : SETUP REDUX
- create reducer
- jika reducer lebih dari satu di combine reducer
- index js => setup redux => *syarat : createStore, Provider, reducer
- bikin store => createStore(reducer)
- sambung ke semu component => <Provider store={globalStore}><App/></Provider>

**/