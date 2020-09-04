import {
    PAYMENT_START,
    PAYMENT_END,
    ADD_PAYMENT,
    UPLOAD_RECEIPT,
} from '../actions';

const INITIAL_STATE = {
    loading: false,
    payment_id: null,
};

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAYMENT_START:
            return { ...state, loading: true };
        case PAYMENT_END:
            return { ...state, loading: false };
        case ADD_PAYMENT:
            return { ...state, payment_id: action.payload.payment_id };
        case UPLOAD_RECEIPT:
            return { ...state, payment_id: null };
        default:
            return state;
    }
};

export default paymentReducer;
