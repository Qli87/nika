import { articleConstants } from "../constants/article.constants"

const initialState = {
    articles: [],
    error: "",
    itemsInCart: [],
    orderAddedToDb: "",
    orderItemAddedToDb: "",
    maxId: 0
}

export default function articleReducer(state = initialState, action) {
    switch(action.type) {
        case articleConstants.GETARTICLES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case articleConstants.GETARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.payload
            }
        case articleConstants.GETARTICLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        
        
        //CRUD localy items for shopping cart
        case articleConstants.ADDITEMINCART_SUCCESS:
            // check if item exists in list
            var _allowedToAddInCart = true
            var _check = JSON.parse(localStorage.getItem('cart'))
            if(_check !== null) {
                if(_check.length === 0) {
                    _allowedToAddInCart = true
                } else {
                    _check.map(item => {   
                        if(item.article_id === action.payload.article_id) {
                            _allowedToAddInCart = false
                        } 
                        return _allowedToAddInCart
                    })
                }
            }
            //if not, add item, and user localstorage if page is refreshed
            if(_allowedToAddInCart) {
                var _itm
                if(action.payload === true) {
                    _itm = []
                } else {
                    var _items = JSON.parse(localStorage.getItem('cart'))
                    if(_items !== null) {
                        _itm = _items.concat([action.payload])
                        localStorage.setItem('cart',JSON.stringify(_itm))
                    } else {
                        _itm = state.itemsInCart.concat([action.payload])
                        localStorage.setItem('cart',JSON.stringify(_itm))
                    }
                }
                return {
                    ...state,
                    error: "",
                    itemsInCart: _itm
                }
            } else {
                return {
                    ...state,
                    error: "Proizvod ste ranije dodali u korpu!",
                    itemsInCart: state.items,
                }
            }
        case articleConstants.EDITITEMINCART_SUCCESS:
            var _total
            var items = JSON.parse(localStorage.getItem('cart'))

            const editedItems = items.map(item => {
                
                if(item.article_id === action.payload.article_id) {
                    return Object.assign({}, item, {
                        article_id: action.payload.article_id,
                        article_name: action.payload.article_name,
                        sell: action.payload.sell,
                        change: action.payload.change,
                        return: action.payload.return
                    })
                }
                return item
            })

            localStorage.setItem('cart',JSON.stringify(editedItems))

            return {
                itemsInCart: editedItems,
                total: _total
            }
        case articleConstants.DELETEITEMFROMCART_SUCCESS:
            var storageItems = JSON.parse(localStorage.getItem('cart'))
            let itms = storageItems.filter(item => item.article_id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(itms))
            return {
                ...state,
                itemsInCart: itms
            }
        case articleConstants.SENDORDER_SUCCESS:
            return {
                ...state,
                orderAddedToDb: action.payload,
            }
        case articleConstants.SENDORDERITEM_SUCCESS:
            return {
                ...state,
                orderItemAddedToDb: action.payload,
                itemsInCart: []
            }
        case articleConstants.GETMAXID_SUCCESS:
            return {
                ...state,
                maxId: action.payload
            }
        case articleConstants.RESETSHOPPINGCART_SUCCESS:
            return {
                ...state,
                itemsInCart: [],
                orderAddedToDb: false,
                orderItemAddedToDb: false
            }
        default:
            return state
    }
}