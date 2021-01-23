import { connect } from 'react-redux'
import { getItemsForInvoice_request } from '../action/invoice.actions'
import InvoiceDetails from '../component/InvoiceDetails'

const mapStateToProps = state => ({
    items: state.invoiceReducer.items
})

const mapDispatchToProps = dispatch => ({
    getItemsForInvoice: (warehouse, invoice) => dispatch(getItemsForInvoice_request(warehouse, invoice))
})

const InvoiceDetailsCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(InvoiceDetails)

export default InvoiceDetailsCnt