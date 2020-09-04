import Axios from 'axios';
import { URL, GET_PRODUCT, GET_CAROUSEL } from './helpers';

// get product
export const getProducts = () => {
    return async (dispatch) => {
        try {
            // request data to API
            const res = await Axios.get(URL + '/api/produk/get');
            dispatch({ type: GET_PRODUCT, payload: res.data });
        } catch (err) {
            console.log(err.response ? err.response.data : err);
        }
    };
};

// get carousel data
export const getCarousel = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get(URL + '/api/produk/carousel');
            dispatch({ type: GET_CAROUSEL, payload: res.data });
        } catch (err) {
            console.log(err.response ? err.response.data : err);
        }
    };
};
