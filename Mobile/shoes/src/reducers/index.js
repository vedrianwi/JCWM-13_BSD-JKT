import { combineReducers } from 'redux';

// import reducer
import productReducer from './product_reducer';
import userReducer from './user_reducer';
import cartReducer from './cart_reducer';
import paymentReducer from './payment_reducer';

// combine all reducer
const allReducers = combineReducers({
    productReducer,
    userReducer,
    cartReducer,
    paymentReducer,
});

// export reducer
export default allReducers;
