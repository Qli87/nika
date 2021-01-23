import { takeEvery, put, call} from 'redux-saga/effects'
import { getCompanyDetails_failure, getCompanyDetails_success, getCompanyForSelect_failure, getCompanyForSelect_success, getShopsForCmp_failure, getShopsForCmp_success } from '../action/company.actions'
import { getComapnyDetails_api, getCompanyForSelect_api, getShopsForCmp_api } from '../api/api'
import { companyConstants } from '../constants/company.constants'


export function* getCustomersForSelect() {
    const response = yield call(getCompanyForSelect_api)
    if(!response && (!response.data || !response.message)) {
        return yield put(getCompanyForSelect_failure('Internal server error for loading comapines'))
    }
    if(response.status === 200) {
        return yield put(getCompanyForSelect_success(response.data))
    } 
    else {
        return yield put(getCompanyForSelect_failure('Error for loading comapines'))
    }
}

export function* getShopsForCmp(action) {
    const response = yield call(getShopsForCmp_api, action.payload)
    if(!response && (!response.data || !response.message)) {
        return yield put(getShopsForCmp_failure('Internal server error for loading shops for comapnies'))
    }
    if(response.status === 200) {
        return yield put(getShopsForCmp_success(response.data))
    } 
    else {
        return yield put(getShopsForCmp_failure('Error for loading shops for comapnies'))
    }
}

export function* getCompanyDetails(action) {
    const response = yield call(getComapnyDetails_api, action.payload)
    if(!response && (!response.data || !response.message)) {
        return yield put(getCompanyDetails_failure('Internal server error for loading company details'))
    }
    if(response.status === 200) {
        localStorage.setItem('companyDetails', JSON.stringify(response.data))
        return yield put(getCompanyDetails_success(response.data))
    } 
    else {
        return yield put(getCompanyDetails_failure('Error for loading company details'))
    }
}
export function* companySaga() {
    yield takeEvery(companyConstants.GETCOMPANYFORSELECT_REQUEST, getCustomersForSelect)
    yield takeEvery(companyConstants.GETSHOPSFORCMP_REQUEST, getShopsForCmp)
    yield takeEvery(companyConstants.GETCOMPANYDETAILS_REQUEST, getCompanyDetails)
}

