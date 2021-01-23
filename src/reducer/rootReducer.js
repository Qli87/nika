import { combineReducers } from 'redux'
import userReducer from './userReducer'
import loginReducer from './loginReducer'
import companyReducer from './companyReducer'
import articleReducer from './articleReducer'
import warehouseReducer from './warehouseReducer'
import invoiceReducer from './invoiceReducer'

export default combineReducers({
    userReducer,
    loginReducer,
    companyReducer,
    articleReducer,
    warehouseReducer,
    invoiceReducer
})