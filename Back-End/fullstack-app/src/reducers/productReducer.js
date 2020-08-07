import { GET_DATA } from '../actions'

const INITIAL_STATE = {
    data : []
}

const productReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_DATA :
            return { data : action.payload }
        default : 
            return state
    }
}

export default productReducer