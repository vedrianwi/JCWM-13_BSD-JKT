import { CART_START, CART_END, GET_CART, CHECK_OUT } from '../actions';

const INITIAL_STATE = {
    cart: [],
    loading: false,
    total: null,
    order_number: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_START:
            return { ...state, loading: true };
        case CART_END:
            return { ...state, loading: false };
        case GET_CART:
            return {
                ...state,
                cart: action.payload.cart,
                total: action.payload.details.total,
                order_number: action.payload.details.order_number,
            };
        case CHECK_OUT:
            return {
                ...state,
                cart: action.payload.cart,
                total: null,
            };
        default:
            return state;
    }
};

export default cartReducer;
