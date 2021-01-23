import { call, put, takeEvery} from 'redux-saga/effects'
import { getWarehouseForUser_failure, getWarehouseForUser_success } from '../action/warehouse.actions';
import { getWarehouseForUser_api } from '../api/api';
import { warehouseConstants } from '../constants/warehouse.constants'


export function* getWarehouseForUser(action) {
    const response = yield call(getWarehouseForUser_api, action.payload)
    if(!response && (!response.data || !response.message)) {
        return yield put(getWarehouseForUser_failure('Internal server error for loading warehouse for user'))
    }
    if(response.status === 200) {
        localStorage.setItem('warehouse', JSON.stringify(response.data))
        return yield put(getWarehouseForUser_success(response.data))
    } 
    else {
        return yield put(getWarehouseForUser_failure('Error for loading warehouse for user'))
    }
}

export function* warehouseSaga() {
    yield takeEvery(warehouseConstants.GETWAREHOUSEFORUSER_REQUEST, getWarehouseForUser)
}