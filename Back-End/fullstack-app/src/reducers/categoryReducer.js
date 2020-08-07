import { GET_CATEGORY_DETAILS } from '../actions'

const INITIAL_STATE = {
    // data : [],
    details : []
}

const categoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_CATEGORY_DETAILS :
            return { details : action.payload }
        default :
            return state
    }
}

export default categoryReducer