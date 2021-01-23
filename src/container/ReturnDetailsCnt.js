import { connect } from 'react-redux'
import { getItemsForInvoice_request } from '../action/invoice.actions'
import ReturnDetails from '../component/ReturnDetails'

const mapStateToProps = state => ({
    items: state.invoiceReducer.items
})

const mapDispatchToProps = dispatch => ({
    getItemsForInvoice: (warehouse, invoice) => dispatch(getItemsForInvoice_request(warehouse, invoice))
})

const ReturnDetailsCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReturnDetails)

export default ReturnDetailsCnt