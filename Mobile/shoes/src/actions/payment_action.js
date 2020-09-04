import Axios from 'axios';
import {
    URL,
    PAYMENT_START,
    PAYMENT_END,
    ADD_PAYMENT,
    UPLOAD_RECEIPT,
} from './helpers';

export const AddPaymentAction = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PAYMENT_START });

            const res = await Axios.post(URL + '/api/transaction/add', body);
            console.log(res.data);
            dispatch({ type: ADD_PAYMENT, payload: res.data });

            dispatch({ type: PAYMENT_END });
        } catch (err) {
            console.log(err.response ? err.response : err);
            dispatch({ type: PAYMENT_END });
        }
    };
};

export const UploadReceipt = (file, id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PAYMENT_START });
            const LINK = URL + '/api/transaction/upload/' + id;
            console.log('link : ', LINK);

            // create form data
            const body = new FormData();
            const image = {
                uri: file.path,
                type: 'image/jpeg',
                name: 'photo.jpg',
            };
            console.log('image file : ', image);
            body.append('IMG', image);

            const options = {
                headers: { 'Content-Type': `multipart/form-data` },
            };
            const res = await Axios.patch(LINK, body, options);
            console.log(res.data);
            dispatch({ type: UPLOAD_RECEIPT });

            dispatch({ type: PAYMENT_END });
        } catch (err) {
            console.log(err.response ? err.response : err);
            dispatch({ type: PAYMENT_END });
        }
    };
};
