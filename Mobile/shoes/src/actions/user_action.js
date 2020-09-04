import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
    URL,
    LOGIN,
    LOGIN_START,
    LOGIN_END,
    LOGIN_ERROR,
    REGISTER,
    REGISTER_START,
    REGISTER_END,
    REGISTER_ERROR,
    CHECK_LOGIN_START,
    CHECK_LOGIN_END,
    KEEP_LOGIN,
    LOG_OUT,
} from './helpers';

export const LoginAction = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_START });

            // request api
            const res = await Axios.post(URL + '/api/user/login', body);
            dispatch({ type: LOGIN, payload: res.data });
            console.log('user : ', res.data);

            // set asyncstorage
            await AsyncStorage.setItem('id', `${res.data.id}`);
            await AsyncStorage.setItem('token', res.data.token);

            dispatch({ type: LOGIN_END });
        } catch (err) {
            console.log(err.response ? err.response.data : err);
            dispatch({ type: LOGIN_ERROR, payload: err.response.data });
        }
    };
};

export const RegisterAction = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: REGISTER_START });

            // request api
            const res = await Axios.post(URL + '/api/user/register', body);
            dispatch({ type: REGISTER, payload: res.data });

            // set asyncstorage
            await AsyncStorage.setItem('id', `${res.data.id}`);
            await AsyncStorage.setItem('token', res.data.token);

            dispatch({ type: REGISTER_END });
        } catch (err) {
            console.log(err.response ? err.response.data : err);
            dispatch({ type: REGISTER_ERROR, payload: err.response.data });
        }
    };
};

export const CheckLoginAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: CHECK_LOGIN_START });

            // restore async storage
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                dispatch({ type: CHECK_LOGIN_END });
                return;
            }

            // request keeplogin to api
            const res = await Axios.post(URL + '/api/user/keeplogin', {
                token,
            });
            dispatch({ type: KEEP_LOGIN, payload: res.data });

            dispatch({ type: CHECK_LOGIN_END });
        } catch (err) {
            console.log(err.response ? err.response.data : err);
            dispatch({ type: CHECK_LOGIN_END });
        }
    };
};

export const LogOutAction = () => {
    return async (dispatch) => {
        try {
            // clear all local storage
            await AsyncStorage.clear();

            // dispatch action
            dispatch({ type: LOG_OUT });
        } catch (err) {
            console.log(err);
        }
    };
};
