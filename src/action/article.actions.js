import { articleConstants } from "../constants/article.constants";

export function getArticles_request(articles) {
    return {
        type: articleConstants.GETARTICLES_REQUEST,
        payload: articles
    }
}
export function getArticles_success(articles) {
    return {
        type: articleConstants.GETARTICLES_SUCCESS,
        payload: articles
    }
}
export function getArticles_failure(error) {
    return {
        type: articleConstants.GETARTICLES_FAILURE,
        payload: error
    }
}



//actions for locally add/delete/edit items in cart
export function addItemInCart_success(item) {
    return {
        type: articleConstants.ADDITEMINCART_SUCCESS,
        payload: item
    }
}
export function editItemInCart_success(item) {
    return {
        type: articleConstants.EDITITEMINCART_SUCCESS,
        payload: item
    }
}
export function deleteItemInCart_success(item) {
    return {
        type: articleConstants.DELETEITEMFROMCART_SUCCESS,
        payload: item
    }
}
export function resetShoopingCart_success(cart) {
    return {
        type: articleConstants.RESETSHOPPINGCART_SUCCESS,
        payload: cart
    }
}
//send order header
export function sendOrder_request(items) {
    return {
        type: articleConstants.SENDORDER_REQUEST,
        payload: items
    }
}
export function sendOrder_success(items) {
    return {
        type: articleConstants.SENDORDER_SUCCESS,
        payload: items
    }
}
export function sendOrder_failure(error) {
    return {
        type: articleConstants.SENDORDER_FAILURE,
        payload: error
    }
}

//send order items
export function sendOrderItem_request(item) {
    return {
        type: articleConstants.SENDORDERITEM_REQUEST,
        payload: item
    }
}
export function sendOrderItem_success(item) {
    return {
        type: articleConstants.SENDORDERITEM_SUCCESS,
        payload: item
    }
}
export function sendOrderItem_failure(error) {
    return {
        type: articleConstants.SENDORDERITEM_FAILURE,
        payload: error
    }
}

//get max id for create new order
export function getMaxId_request(id) {
    return {
        type: articleConstants.GETMAXID_REQUEST,
        payload: id
    }
}
export function getMaxId_success(id) {
    return {
        type: articleConstants.GETMAXID_SUCCESS,
        payload: id
    }
}
export function getMaxId_failure(error) {
    return {
        type: articleConstants.GETMAXID_FAILURE,
        payload: error
    }
}