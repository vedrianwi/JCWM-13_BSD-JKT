import { combineReducers } from 'redux'

import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import userReducer from './userReducers'
import profileReducer from './profileReducer'

const Reducers = combineReducers({
    product : productReducer,
    category : categoryReducer,
    user : userReducer,
    profile : profileReducer
})

export default Reducers

// Reducer => productReducer