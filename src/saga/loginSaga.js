import { takeEvery, put, call} from 'redux-saga/effects'
import { loginConstants } from '../constants/login.constants';
import { login_api, checkUser_api } from '../api/api'
import { getLoggedUser_failure, getLoggedUser_success, login_failure, login_success } from '../action/login.action'

export function* login(action) {
    const response = yield call(login_api, action)
    if(!response && (!response.data || !response.message)) {
        return yield put(login_failure('Internal server error for login user'))
    }
    if(response.status === 200) {
        localStorage.setItem('token', response.data)
        return yield put(login_success(response.data))
    } 
    if(response.message === "The given data was invalid.") {
        return yield put(login_failure('Neuspješan login!'))
    }
    else {
        return yield put(login_failure('Neuspješan login!'))
    }
}

export function* getLoggedUser(action) {
    const response = yield call(checkUser_api, action.payload)
    if(!response && (!response.data || !response.message)) {
        return yield put(getLoggedUser_failure('Internal server error for loading logged user'))
    }
    if(response.status === 200) {
        let userDetails = {
            id: response.data.user.id,
            name: response.data.user.name,
        }
        localStorage.setItem('user', JSON.stringify(userDetails))
        return yield put(getLoggedUser_success(response.data))
    } 
    else {
        return yield put(getLoggedUser_failure('Error for loading logged user'))
    }
}

export function* loginSaga() {
    yield takeEvery(loginConstants.LOGIN_REQUEST, login)
    yield takeEvery(loginConstants.GETLOGGEDUSER_REQUEST, getLoggedUser)
}