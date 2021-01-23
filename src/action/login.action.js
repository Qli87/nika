import { loginConstants } from '../constants/login.constants'

//login
export function login_request(auth) {
    return {
        type: loginConstants.LOGIN_REQUEST,
        payload: auth
    }
}
export function login_success(auth) {
    return {
        type: loginConstants.LOGIN_SUCCESS,
        payload: auth
    }
}
export function login_failure(error) {
    return {
        type: loginConstants.LOGIN_FAILURE,
        error: error
    }
}
//logout
export function logout_request(details) {
    return {
        type: loginConstants.LOGOUT_REQUEST,
        payload: details
    }
}
export function logout_success(details) {
    return {
        type: loginConstants.LOGOUT_SUCCESS,
        payload: details
    }
}
export function logout_failure(error) {
    return {
        type: loginConstants.LOGOUT_FAILURE,
        payload: error
    }
}
//get logged user
export function getLoggedUser_request(user) {
    return {
        type: loginConstants.GETLOGGEDUSER_REQUEST,
        payload: user
    }
}
export function getLoggedUser_success(user) {
    return {
        type: loginConstants.GETLOGGEDUSER_SUCCESS,
        payload: user
    }
}
export function getLoggedUser_failure(error) {
    return {
        type: loginConstants.GETLOGGEDUSER_FAILURE,
        payload: error
    }
}