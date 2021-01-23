import { invoiceConstants } from "../constants/invoice.constants";

//get invoices
export function getInvoicesForWarehouse_request(invoices, page) {
    return {
        type: invoiceConstants.GETINVOICESFORWAREHOUSE_REQUEST,
        payload: invoices, page
    }
}
export function getInvoicesForWarehouse_success(invoices, page) {
    return {
        type: invoiceConstants.GETINVOICESFORWAREHOUSE_SUCCESS,
        payload: invoices, page
    }
}
export function getInvoicesForWarehouse_failure(error) {
    return {
        type: invoiceConstants.GETINVOICESFORWAREHOUSE_FAILURE,
        payload: error
    }
}

//get items for invoice
export function getItemsForInvoice_request(warehouse, invoice) {
    return {
        type: invoiceConstants.GETITEMSFORINVOICE_REQUEST,
        payload: warehouse, invoice
    }
}
export function getItemsForInvoice_success(warehouse, invoice) {
    return {
        type: invoiceConstants.GETITEMSFORINVOICE_SUCCESS,
        payload: warehouse, invoice
    }
}
export function getItemsForInvoice_failure(error) {
    return {
        type: invoiceConstants.GETITEMSFORINVOICE_FAILURE,
        payload: error
    }
}