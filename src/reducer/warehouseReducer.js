import { warehouseConstants } from "../constants/warehouse.constants"

const initialState = {
    warehouse: []
}

export default function warehouseReducer(state = initialState, action) {
    switch(action.type) {
        case warehouseConstants.GETWAREHOUSEFORUSER_SUCCESS:
            return {
                ...state,
                warehouse: action.payload
            }
        default:
            return state
    }
}