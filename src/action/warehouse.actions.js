import { warehouseConstants } from "../constants/warehouse.constants";

//get warehouse for user
export function getWarehouseForUser_request(warehouse) {
    return {
        type: warehouseConstants.GETWAREHOUSEFORUSER_REQUEST,
        payload: warehouse
    }
}
export function getWarehouseForUser_success(warehouse) {
    return {
        type: warehouseConstants.GETWAREHOUSEFORUSER_SUCCESS,
        payload: warehouse
    }
}
export function getWarehouseForUser_failure(error) {
    return {
        type: warehouseConstants.GETWAREHOUSEFORUSER_FAILURE,
        payload: error
    }
}