import {
    LOGIN_START,
    LOGIN_END,
    LOGIN_ERROR,
    LOGIN,
    REGISTER,
    REGISTER_START,
    REGISTER_END,
    REGISTER_ERROR,
    CHECK_LOGIN_START,
    CHECK_LOGIN_END,
    KEEP_LOGIN,
    LOG_OUT,
} from '../actions';

const INITIAL_STATE = {
    id: null,
    username: '',
    email: '',
    role: '',
    status: null,
    loading: false,
    error: '',
    loadingRegis: false,
    errorRegis: '',
    authloading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                status: action.payload.status,
            };
        case LOGIN_START:
            return { ...state, loading: true };
        case LOGIN_END:
            return { ...state, loading: false };
        case LOGIN_ERROR:
            return { ...state, loading: false, error: action.payload };
        case REGISTER:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                status: action.payload.status,
            };
        case REGISTER_START:
            return { ...state, loadingRegis: true };
        case REGISTER_END:
            return { ...state, loadingRegis: false };
        case REGISTER_ERROR:
            return {
                ...state,
                loadingRegis: false,
                errorRegis: action.payload,
            };
        case CHECK_LOGIN_START:
            return { ...state, authloading: true };
        case CHECK_LOGIN_END:
            return { ...state, authloading: false };
        case KEEP_LOGIN:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                status: action.payload.status,
            };
        case LOG_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default userReducer;
