import { connect } from 'react-redux'
import ShoppingCart from '../component/ShoppingCart'
import { deleteItemInCart_success, editItemInCart_success, getMaxId_request, resetShoopingCart_success, sendOrderItem_request, sendOrder_request } from '../action/article.actions'

const mapStateToProps = state => ({
    itemsInCart: state.articleReducer.itemsInCart,
    orderAddedToDb: state.articleReducer.orderAddedToDb,
    orderItemAddedToDb: state.articleReducer.orderItemAddedToDb,
    maxId: state.articleReducer.maxId
})

const mapDispatchToProps = dispatch => ({
    changeDetails: (item) => dispatch(editItemInCart_success(item)),
    deleteItem: (item) => dispatch(deleteItemInCart_success(item)),
    sendOrder: (items) => dispatch(sendOrder_request(items)),
    sendOrderItem: (items) => dispatch(sendOrderItem_request(items)),
    getMaxId: () => dispatch(getMaxId_request()),
    resetShoopingCart: () => dispatch(resetShoopingCart_success())
})

const ShoppingCartCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart)

export default ShoppingCartCnt