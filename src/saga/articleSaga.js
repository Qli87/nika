import { takeEvery, put, call} from 'redux-saga/effects'
import { getArticles_failure, getArticles_success, getMaxId_failure, getMaxId_success, sendOrderItem_failure, sendOrderItem_success, sendOrder_failure, sendOrder_success } from '../action/article.actions';
import { getArticlesForWarehouse_api, getMaxId_api, sendOrderItem_api, sendOrder_api } from '../api/api';
import { articleConstants } from '../constants/article.constants';


export function* getArticles(action) {
    const response = yield call(getArticlesForWarehouse_api, action.payload)
    if(!response && (!response.data || !response.message)) {
        return yield put(getArticles_failure('Internal server error for loading articles'))
    }
    if(response.status === 200) {
        return yield put(getArticles_success(response.data))
    } 
    else {
        return yield put(getArticles_failure('Error for loading articles'))
    }
}

export function* sendOrder(action) {
    const response = yield call(sendOrder_api, action.payload)
    if(!response && (!response.data || !response.message)) {
        return yield put(sendOrder_failure('Internal server error for sendind order'))
    }
    if(response.status === 200) {
        return yield put(sendOrder_success(response.data))
    } 
    else {
        return yield put(sendOrder_failure('Error in sendind order'))
    }
}

export function* sendOrderItem(action) {
    const response = yield call(sendOrderItem_api, action.payload)
    if(!response && (!response.data || !response.message)) {
        return yield put(sendOrderItem_failure("Internal server error for sending order items"))
    }
    if(response.status === 200) {
        return yield put(sendOrderItem_success(response.data))
    } 
    else {
        return yield put(sendOrderItem_failure("Error for sending order items"))
    }
}

export function* getMaxId() {
    const response = yield call(getMaxId_api)
    if(!response && (!response.data || !response.message)) {
        return yield put(getMaxId_failure('Internal server error for getting max order id'))
    }
    if(response.status === 200) {
        return yield put(getMaxId_success(response.data))
    } 
    else {
        return yield put(getMaxId_failure('Error for getting max order id'))
    }
}


export function* articleSaga() {
    yield takeEvery(articleConstants.GETARTICLES_REQUEST, getArticles)
    yield takeEvery(articleConstants.SENDORDER_REQUEST, sendOrder)
    yield takeEvery(articleConstants.SENDORDERITEM_REQUEST, sendOrderItem)
    yield takeEvery(articleConstants.GETMAXID_REQUEST, getMaxId)
}

