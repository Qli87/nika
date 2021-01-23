import { connect } from 'react-redux'
import { addItemInCart_success, getArticles_request, resetShoopingCart_success } from '../action/article.actions'
import Articles from '../component/Articles'

const mapStateToProps = state => ({
    articles: state.articleReducer.articles,
    error: state.articleReducer.error
})

const mapDispatchToProps = dispatch => ({
    getArticles: (warehouse) => dispatch(getArticles_request(warehouse)),
    //add item to cart
    addItemToCart: (item) => dispatch(addItemInCart_success(item)),
    resetShoppingCart: () => dispatch(resetShoopingCart_success())
})

const ArticlesCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles)

export default ArticlesCnt