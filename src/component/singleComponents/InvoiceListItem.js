import React from 'react'
import { withRouter } from 'react-router-dom'
import printer from '../../assets/printer.png'
import printer2 from '../../assets/printer2.png'
import moment from 'moment'
import { userPath } from '../../constants/path.constants'

class InvoiceListItem extends React.Component {

    itemDetails = () => {
        localStorage.setItem('invoiceHeader',JSON.stringify(this.props.invoiceHeader))
        //get items for invoice
        this.props.getItemsForInvoice(this.props.invoiceHeader.warehouse, this.props.invoiceHeader.invoice_id)
        //get companyDetails
        this.props.getCompanyDetails(this.props.invoiceHeader.company_id)

        let path = userPath.inoviceDetails
        this.props.history.push(path)
    }

    itemDetails2 = () => {
        localStorage.setItem('invoiceHeader',JSON.stringify(this.props.invoiceHeader))
        //get items for invoice
        this.props.getItemsForInvoice(this.props.invoiceHeader.warehouse, this.props.invoiceHeader.invoice_id)
        //get companyDetails
        this.props.getCompanyDetails(this.props.invoiceHeader.company_id)

        let path = userPath.returnDetails
        this.props.history.push(path)
    }



    render() {

        return(
            <tr>
                <td  style={{'width': '25%', 'textAlign':'left'}}>{this.props.company}</td>
                {/* <td >{this.props.shop}</td> */}
                <td style={{'width': '25%', 'textAlign':'right'}} >{moment(this.props.date).format('DD/MM/YYYY')}</td>
                <td  style={{'width': '25%', 'textAlign':'right'}}>{this.props.total}</td>
                <td style={{'width': '25%'}}>
                    <img style={{'marginRight':'1px'}} src={printer} alt="printer" onClick={this.itemDetails} title="Štampa računa"/>
                    <img src={printer2} alt="printer" onClick={this.itemDetails2} title="Štampa povrata"/>
                </td>
            </tr>
        )
    }
}

export default withRouter(InvoiceListItem)