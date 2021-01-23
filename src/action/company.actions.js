import { companyConstants } from "../constants/company.constants";

//get all comapnies for select
export function getCompanyForSelect_request(companies) {
    return {
        type: companyConstants.GETCOMPANYFORSELECT_REQUEST,
        payload: companies
    }
}
export function getCompanyForSelect_success(companies) {
    return {
        type: companyConstants.GETCOMPANYFORSELECT_SUCCESS,
        payload: companies
    }
}
export function getCompanyForSelect_failure(error) {
    return {
        type: companyConstants.GETCOMPANYFORSELECT_FAILURE,
        payload: error
    }
}
//end

//get all shops for company
export function getShopsForCmp_request(company_id) {
    return {
        type: companyConstants.GETSHOPSFORCMP_REQUEST,
        payload: company_id
    }
}
export function getShopsForCmp_success(company_id) {
    return {
        type: companyConstants.GETSHOPSFORCMP_SUCCESS,
        payload: company_id
    }
}
export function getShopsForCmp_failure(error) {
    return {
        type: companyConstants.GETSHOPSFORCMP_FAILURE,
        payload: error
    }
}
//GET company details for printig invoice
export function getCompanyDetails_request(details) {
    return {
        type: companyConstants.GETCOMPANYDETAILS_REQUEST,
        payload: details
    }
}
export function getCompanyDetails_success(details) {
    return {
        type: companyConstants.GETCOMPANYDETAILS_SUCCESS,
        payload: details
    }
}
export function getCompanyDetails_failure(error) {
    return {
        type: companyConstants.GETCOMPANYDETAILS_FAILURE,
        payload: error
    }
}