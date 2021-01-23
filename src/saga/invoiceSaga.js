import { call, put, takeEvery} from 'redux-saga/effects'
import { getInvoicesForWarehouse_failure, getInvoicesForWarehouse_success, getItemsForInvoice_failure, getItemsForInvoice_success } from '../action/invoice.actions'
import { getInvoicesForWarehouse_api, getItemsForInvoice_api } from '../api/api'
import { invoiceConstants } from '../constants/invoice.constants'


export function* getInvoiceForWarehouse(action) {
    const response = yield call(getInvoicesForWarehouse_api, action)
    if(!response && (!response.data || !response.message)) {
        return yield put(getInvoicesForWarehouse_failure('Internal servere error for loading invoices for warehouse'))
    }
    if(response.status === 200) {
        return yield put(getInvoicesForWarehouse_success(response.data))
    } 
    else {
        return yield put(getInvoicesForWarehouse_failure('Error for loading invoices for warehouse'))
    }
}

export function* getItemsForInvoice(action) {
    const response = yield call(getItemsForInvoice_api, action)
    if(!response && (!response.data || !response.message)) {
        return yield put(getItemsForInvoice_failure('Internal server error for loading items for invoice'))
    }
    if(response.status === 200) {
        localStorage.setItem('invoiceItem', JSON.stringify(response.data))
        return yield put(getItemsForInvoice_success(response.data))
    } 
    else {
        return yield put(getItemsForInvoice_failure('Error for loading items for invoice'))
    }
}

export function* invoiceSaga() {
    yield takeEvery(invoiceConstants.GETINVOICESFORWAREHOUSE_REQUEST, getInvoiceForWarehouse)
    yield takeEvery(invoiceConstants.GETITEMSFORINVOICE_REQUEST, getItemsForInvoice)
}