// import combine reducer
import { combineReducers } from 'redux'

// import all reducer
import { countReducer } from './countReducer'

// combine reducer
const allReuducer = combineReducers({
    countReducer
})

// export all reducer
export default allReuducer

// NOTE : combinereducer akan menghasilkan object yang isinya semua reducers