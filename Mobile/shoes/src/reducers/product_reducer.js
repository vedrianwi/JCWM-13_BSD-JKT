import { GET_PRODUCT, GET_CAROUSEL } from '../actions';

// intiale state
const INITIAL_STATE = {
    products: [],
    carousel: [],
    cart: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return { ...state, products: action.payload };
        case GET_CAROUSEL:
            return { ...state, carousel: action.payload };
        default:
            return state;
    }
};

export default productReducer;
