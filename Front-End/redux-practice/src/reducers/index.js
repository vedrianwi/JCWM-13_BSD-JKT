import { combineReducers } from 'redux'

// import reducers
import { counterReducer } from './counterReducer'

// combine all reducer
const allReducers = combineReducers({
   counter : counterReducer
})

// export reducer
export default allReducers