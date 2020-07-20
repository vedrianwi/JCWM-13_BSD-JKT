// state data
const INITIAL_STATE = {
    count : 0,
    // validate : false
}

// create reducer
export const countReducer = (state = INITIAL_STATE, action) => {
    // console.log('count reducer')
    // return state

    // handle action
    switch(action.type) {
        // check action
        case 'PLUS' :
            return { count : state.count + action.payload }
        case 'MINUS' :
            return { count : state.count - action.payload }
        default : 
            return state
    }
}
