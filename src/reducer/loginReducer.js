import { loginConstants } from "../constants/login.constants"

const initialState = {
    user : [],
    error: '',
    token: ""
}

export default function loignReducer(state = initialState, action) {
    switch(action.type) {
        case loginConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload,
                error: ''
            }
        case loginConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case loginConstants.GETLOGGEDUSER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case loginConstants.LOGOUT_SUCCESS:
            return {
                ...state,
                user: []
            }
        default:
            return state
    }
}