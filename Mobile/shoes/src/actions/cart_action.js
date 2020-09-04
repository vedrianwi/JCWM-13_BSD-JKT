import Axios from 'axios';
import { URL, CART_START, CART_END, GET_CART, CHECK_OUT } from './helpers';

// get user cart
export const GetCartAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CART_START });

            // reuqest api to get user's cart data
            const res = await Axios.get(URL + '/api/order/cart/' + id);
            console.log(res.data);

            dispatch({ type: GET_CART, payload: res.data });

            dispatch({ type: CART_END });
        } catch (err) {
            dispatch({ type: CART_END });
            console.log(err.response ? err.response.data : err);
        }
    };
};

// edit qty in user's cart
export const EditCartQtyAction = (user_id, id, qty, harga) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CART_START });

            // request api : EDIT
            const res = await Axios.patch(URL + '/api/order/edit/' + id, {
                qty,
                total: qty * harga,
            });
            console.log(res.data);

            // request api get cart data
            const cart = await Axios.get(URL + '/api/order/cart/' + user_id);
            dispatch({ type: GET_CART, payload: cart.data });

            dispatch({ type: CART_END });
        } catch (err) {
            dispatch({ type: CART_END });
            console.log(err.response ? err.response.data : err);
        }
    };
};

// delete user's cart item
export const DeleteCartItemAction = (user_id, id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CART_START });

            // request api : DELETE
            const res = await Axios.delete(URL + '/api/order/delete/' + id);
            console.log(res.data);

            // request api get cart data
            const cart = await Axios.get(URL + '/api/order/cart/' + user_id);
            dispatch({ type: GET_CART, payload: cart.data });

            dispatch({ type: CART_END });
        } catch (err) {
            dispatch({ type: CART_END });
            console.log(err.response ? err.response.data : err);
        }
    };
};

// checkout
export const ChekOutAction = (user_id, order_number) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CART_START });

            // request API : check out
            const res = await Axios.get(
                URL + '/api/order/checkout/' + order_number,
            );
            console.log(res.data);

            // request api get cart data
            const cart = await Axios.get(URL + '/api/order/cart/' + user_id);
            dispatch({ type: CHECK_OUT, payload: cart.data });

            dispatch({ type: CART_END });
        } catch (err) {
            dispatch({ type: CART_END });
            console.log(err.response ? err.response.data : err);
        }
    };
};

// add to cart
export const AddToCartAction = (body) => {
    return async (dispatch) => {
        try {
            const res = await Axios.post(URL + '/api/order/add', body);
            console.log(res.data);

            // request api get cart data
            const cart = await Axios.get(
                URL + '/api/order/cart/' + body.user_id,
            );
            dispatch({ type: GET_CART, payload: cart.data });
        } catch (err) {
            console.log(err.response ? err.response.data : err);
        }
    };
};
