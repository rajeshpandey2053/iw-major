import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './loginType';

const initialState = {
    loading: false,
    token: '',
    errorMessage: '',
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case REQUEST_LOGIN:
            return {
                ...state,
                loading: true,
            }
        
        case LOGIN_SUCCESS:
            return {
                loading: false,
                token: action.payload,
                errorMessage:''
            }

        case LOGIN_FAIL:
            return {
                loading: false,
                token: '',
                errorMessage: action.payload,
            }
        default: return state;
    }
}

export default reducer;