import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { Row, Col,  Button, Table, FormGroup, Label } from 'reactstrap'
import logo from '../assets/logo.JPG'
import ReturnDetailsItem from './singleComponents/ReturnDetailsItem'

class ReturnDetails extends React.Component {
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
                    <p className="invoiceNbrStyle margin0">Račun broj: {invoiceHeader.invoice_id}/{invoiceHeader.warehouse}</p>
                    <p className="invoiceNbrStyle margin0">Datum računa: {moment(invoiceHeader.date).format('DD/MM/YYYY')}</p>
                    <p className="invoiceNbrStyle margin0">Datum valute: {moment(invoiceHeader.payment_dates).format('DD/MM/YYYY')}</p>
                    <p className="invoiceNbrStyle margin0">Napomena: {invoiceHeader.note}</p>
                </Col>

                <Col className="md-6 right150">
                    <div className="cmpMainDetails">
                        <p className="invoiceNbrStyle margin0">{invoiceHeader.company_name}</p>
                        <p className="invoiceNbrStyle margin0">{invoiceHeader.shop_name}</p>
                        <p className="invoiceNbrStyle margin0">{companyDetails.city}</p>
                        <p className="invoiceNbrStyle margin0">PIB: {companyDetails.pib} PDV: {companyDetails.pbv}</p>
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
                                if(item.return > 0) {
                                    return <ReturnDetailsItem 
                                    key={index}
                                    rbr={index}
                                    item_id={item.item_id}
                                    barcode={item.barcode}
                                    item_name={item.item_name}
                                    //qunatity za povrat - return
                                    return={item.return}
                                    //
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
            
            {/* <Row className="invoiceBottomDetails">
                <Col className="md-3">
                    <p className="margin0 weight500">Vel.vrijed: {invoiceHeader.vl_price}</p>
                    <p className="margin0 weight500">Rabat: {invoiceHeader.discount > 1 ? invoiceHeader.discount : "0.00"} </p>
                </Col>
                <Col className="md-3">
                    <p className="margin0 weight500">Osnovica 21%:</p>
                    <p className="margin0 weight500">Poraz 21%:</p>
                </Col>
                <Col className="md-3">
                    <p className="margin0 weight500">Osnovica 7%: {invoiceHeader.osn_7}</p>
                    <p className="margin0 weight500">Poraz 7%: {invoiceHeader.tax_7}</p>
                </Col>
                <Col className="md-3">
                    <p className="total">UKUPNO: {invoiceHeader.total}</p>
                </Col>
            </Row> */}

            <Button className="shadowButton loginBtn" onClick={() => window.print()}>Stampa računa</Button>

            {/* <Row className="courtTxt fontWeight">
                <Col className="md-3">
                    <FormGroup>
                        <Label>U slučaju sdivora nadležan je Privredni Sud u Podgorici ili sud po ugovorenoj nadležnosti.</Label>
                        <Label>Za neblagovremene uplate zaračunavamo zakonsku kamatu.</Label>
                    </FormGroup>
                </Col>
            </Row> */}


            <Row className="footer size18">
                <Col className="md-3">
                    <FormGroup>
                        <Label>Robu izdao:</Label>
                        <p>____________________________</p>
                    </FormGroup>
                </Col>
                <Col className="md-3">
                    {/* <FormGroup>
                        <Label>Vozač:</Label>
                        <p>____________________________</p>
                    </FormGroup> */}
                </Col>
                <Col className="md-3">
                    {/* <FormGroup>
                        <Label>Fakturisao:</Label>
                        <p>____________________________</p>
                    </FormGroup> */}
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


export default withRouter(ReturnDetails)