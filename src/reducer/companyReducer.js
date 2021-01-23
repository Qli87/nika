import { companyConstants } from "../constants/company.constants"

const initialState = {
    companies: [],
    shops: [],
    error: "",
    companyDetails: ""
}

export default function companyReducer(state = initialState, action) {
    switch(action.type) {
        case companyConstants.GETCOMPANYFORSELECT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case companyConstants.GETCOMPANYFORSELECT_SUCCESS:
            return {
                ...state,
                loading: false,
                companies: action.payload
            }
        case companyConstants.GETCOMPANYFORSELECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case companyConstants.GETSHOPSFORCMP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case companyConstants.GETSHOPSFORCMP_SUCCESS:
            return {
                ...state,
                loading: false,
                shops: action.payload
            }
        case companyConstants.GETSHOPSFORCMP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case companyConstants.GETCOMPANYDETAILS_SUCCESS:
            return {
                ...state,
                companyDetails: action.payload
            }
        default:
            return state
    }
}