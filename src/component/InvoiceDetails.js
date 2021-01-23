import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { Row, Col,  Button, Table, FormGroup, Label } from 'reactstrap'
import logo from '../assets/logo.JPG'
import InvoiceDetailsItem from './singleComponents/InvoiceDetailsItem'

class InoviceDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        let invoiceHeader = JSON.parse(localStorage.getItem('invoiceHeader'))
        this.props.getItemsForInvoice(invoiceHeader.warehouse, invoiceHeader.invoice_id)
    }



    render() {
        let invoiceHeader = JSON.parse(localStorage.getItem('invoiceHeader'))
        let companyDetails = JSON.parse(localStorage.getItem('companyDetails'))
        let invoiceItem = JSON.parse(localStorage.getItem('invoiceItem'))
        return(
            <div style={{'padding':'0'}}>

            <img className="img" src={logo} alt="logo"/>

            {/* header details */}
            <Row>
                <Col className="md-6 left150">
                    <p className="invoiceNbrStyle margin0">Račun broj: {invoiceHeader !== null ? invoiceHeader.invoice_id + "/" + invoiceHeader.warehouse : ""}  </p>
                    <p className="invoiceNbrStyle margin0">Datum računa: {invoiceHeader !== null ? moment(invoiceHeader.date).format('DD/MM/YYYY') : ""}</p>
                    <p className="invoiceNbrStyle margin0">Datum valute: {invoiceHeader !== null ? moment(invoiceHeader.payment_dates).format('DD/MM/YYYY') : ""}</p>
                    <p className="invoiceNbrStyle margin0">Napomena: {invoiceHeader !== null ? invoiceHeader.note : ""}</p>
                </Col>

                <Col className="md-6 right150">
                    <div className="cmpMainDetails">
                        <p className="invoiceNbrStyle margin0">{invoiceHeader !== null ? invoiceHeader.company_name : ""}</p>
                        <p className="invoiceNbrStyle margin0">{invoiceHeader !== null ? invoiceHeader.shop_name : ""}</p>
                        <p className="invoiceNbrStyle margin0">{companyDetails !== null ? companyDetails.city : ""}</p>
                        <p className="invoiceNbrStyle margin0">PIB: {companyDetails !== null ? companyDetails.pib : ""} PDV: {companyDetails !== null ? companyDetails.pbv : ""}</p>
                    </div>
                </Col>
            </Row>
            {/* end header details */}




            <Table className="marginTop borderBottom">
                <thead className="tbodyAligment">
                    <tr>
                        <th>Rbr.</th>
                        <th>Sifra</th>
                        <th>Barkod</th>
                        <th>Naziv</th>
                        <th>J/M</th>
                        <th>Kolicina</th>
                        <th>Cijena VP</th>
                        <th>Rabat%</th>
                        <th>Cijena BP</th>
                        <th>Por%</th>
                        <th>Cijena PDV</th>
                        <th>Iznos</th>
                    </tr>
                </thead>
                <tbody className="fontWeight">
                        {
                            invoiceItem !== null
                            ?
                            invoiceItem.map((item, index) => {
                                if(item.return == 0) {
                                    return <InvoiceDetailsItem 
                                    key={index}
                                    rbr={index}
                                    item_id={item.item_id}
                                    barcode={item.barcode}
                                    item_name={item.item_name}
                                    quantity={item.quantity}
                                    vp_price={item.vp_price}
                                    discount={item.discount}
                                    bp_price={item.bp_price}
                                    tax={item.tax}
                                    mp_price={item.mp_price}
                                    total={item.total}
                                />
                                }

                            })
                            :
                            <tr>
                                <td></td>
                            </tr>
                        }
                </tbody>
            </Table>
            
            <Row className="invoiceBottomDetails">
                <Col className="md-3">
                    <p className="margin0 weight500">Vel.vrijed: {invoiceHeader.vl_price}</p>
                    <p className="margin0 weight500">Rabat: {invoiceHeader.discount > 1 ? invoiceHeader.discount : "0.00"} </p>
                </Col>
                <Col className="md-3">
                    <p className="margin0 weight500">Osnovica 21%: {invoiceHeader.osn_21 > 1 ? invoiceHeader.osn_21 : "0.00"}</p>
                    <p className="margin0 weight500">Poraz 21%: {invoiceHeader.tax_21 > 1 ? invoiceHeader.tax_21: "0.00"}</p>
                </Col>
                <Col className="md-3">
                    <p className="margin0 weight500">Osnovica 7%: {invoiceHeader.osn_7}</p>
                    <p className="margin0 weight500">Poraz 7%: {invoiceHeader.tax_7}</p>
                </Col>
                <Col className="md-3">
                    <p className="total">UKUPNO: {invoiceHeader.total}</p>
                </Col>
            </Row>

            <Button className="shadowButton loginBtn" onClick={() => window.print()}>Stampa računa</Button>

            <Row className="courtTxt fontWeight">
                <Col className="md-3">
                    <FormGroup>
                        <Label>U slučaju sdivora nadležan je Privredni Sud u Podgorici ili sud po ugovorenoj nadležnosti.</Label>
                        <Label>Za neblagovremene uplate zaračunavamo zakonsku kamatu.</Label>
                    </FormGroup>
                </Col>
                {/* <div>
                    <p>U slučaju sdivora nadležan je Privredni Sud u Podgorici ili sud po ugovorenoj nadležnosti. </p>
                </div>
                <p>Za neblagovremene uplate zaračunavamo zakonsku kamatu.</p> */}
            </Row>


            <Row className="footer size18">
                <Col className="md-3">
                    <FormGroup>
                        <Label>Robu izdao:</Label>
                        <p>____________________________</p>
                    </FormGroup>
                </Col>
                <Col className="md-3">
                    <FormGroup>
                        <Label>Vozač:</Label>
                        <p>____________________________</p>
                    </FormGroup>
                </Col>
                <Col className="md-3">
                    <FormGroup>
                        <Label>Fakturisao:</Label>
                        <p>____________________________</p>
                    </FormGroup>
                </Col>
                <Col className="md-3">
                    <FormGroup>
                        <Label>Robu primio:</Label>
                        <p>____________________________</p>
                    </FormGroup>
                </Col>
            </Row>

            </div>
        )
    }
}


export default withRouter(InoviceDetails)