import { connect } from 'react-redux'
import { getCompanyDetails_request } from '../action/company.actions'
import { getInvoicesForWarehouse_request, getItemsForInvoice_request } from '../action/invoice.actions'
import InvoiceList from '../component/InvoiceList'

const mapStateToProps = state => ({
    invoices: state.invoiceReducer.invoices
})

const mapDispatchToProps = dispatch => ({
    getInvoicesForWarehouse: (warehouse, page) => dispatch(getInvoicesForWarehouse_request(warehouse, page)),
    getItemsForInvoice: (warehouse, invoice) => dispatch(getItemsForInvoice_request(warehouse, invoice)),
    getCompanyDetails: (company) => dispatch(getCompanyDetails_request(company))
})

const InvoiceListCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(InvoiceList)

export default InvoiceListCnt