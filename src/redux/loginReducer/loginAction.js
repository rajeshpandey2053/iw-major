import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from './loginType.js';

export function requestLogin(){
    return {
        type: REQUEST_LOGIN
    }
}

export const loginSuccess = token => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

export const loginFail = errorMessage => {
    return {
        type: LOGIN_FAIL,
        payload: errorMessage 
    }
}