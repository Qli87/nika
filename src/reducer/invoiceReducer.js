import { invoiceConstants } from "../constants/invoice.constants"

const initialState = {
    invoices: [],
    items: []
}

export default function invoiceReducer(state = initialState, action) {
    switch(action.type) {
        case invoiceConstants.GETINVOICESFORWAREHOUSE_SUCCESS:
            return {
                ...state,
                invoices: action.payload
            }
        case invoiceConstants.GETITEMSFORINVOICE_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}