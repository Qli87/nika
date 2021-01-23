import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import { Table } from 'reactstrap'
import InvoiceListItem from './singleComponents/InvoiceListItem'

class InvoiceList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invoices: [],
            current_page: 1,
            per_page: '',
            total: '',
        }
    }

    componentDidMount() {
        let warehouse = JSON.parse(localStorage.getItem('warehouse'))
        this.props.getInvoicesForWarehouse(warehouse.id, this.state.current_page)
    }

    static getDerivedStateFromProps(props, state) {
        if(props.invoices !== state.invoices) {
            return {
                invoices: props.invoices.data,
                current_page: props.invoices.current_page,
                per_page: props.invoices.per_page,
                total: props.invoices.total,
            }
        }
        return null
    }

    //change page in pagination
    setActivePage = (current_page) => {
        let warehouse = JSON.parse(localStorage.getItem('warehouse'))

        this.props.getInvoicesForWarehouse(warehouse.id, current_page)
    }
    

    render() {
        return(
            <div className="height-style bck" style={{'padding':'0'}}>
                <Table>
                    <thead className="tbodyAligment">
                        <tr>
                            <th style={{'textAlign':'left'}}>Kupac</th>
                            {/* <th>Objekat</th> */}
                            <th style={{'textAlign':'right'}}>Datum</th>
                            <th style={{'textAlign':'right'}}>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody className="tbodyAligment">
                        {
                            this.state.invoices !== undefined 
                            ?
                            this.state.invoices.map((item, index)=> {
                                return <InvoiceListItem
                                        key={index}
                                        company={item.company_name}
                                        shop={item.shop_name}
                                        date={item.date}
                                        total={item.total}
                                        invoiceHeader={item}
                                        getCompanyDetails={this.props.getCompanyDetails}
                                        getItemsForInvoice={this.props.getItemsForInvoice}
                                    />
                            })
                            :
                            <tr>
                                <td>Korpa je prazna!</td>   
                            </tr>
                        }
                    </tbody>
                </Table>

                <Pagination 
                    activePage={this.state.current_page} 
                    itemsCountPerPage={this.state.per_page} 
                    totalItemsCount={this.state.total || 0} 
                    pageRangeDisplayed={3}
                    onChange={this.setActivePage}
                    itemClass="page-item"
                    linkClass="page-link"
                /> 
            </div>
        )
    }
}


export default withRouter(InvoiceList)