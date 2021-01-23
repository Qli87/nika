import React from 'react'
import { withRouter } from 'react-router-dom'
import {  Card, Button, Table } from 'reactstrap'
import ModalSendOrder from './ModalSendOrder'
import ShoppingCartItem from './singleComponents/ShoppingCartItem'
import moment from 'moment'
import { userPath } from '../constants/path.constants'

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sell: this.props.sell,
            change: this.props.change,
            return: this.props.return,
            showModal: false,
            orderAddedToDb: "",
            orderItemAddedToDb: "",
            itemsInCart: [],
            maxId: 0
        }
    }


    componentDidMount(){
        this.props.resetShoopingCart()
    }

    static getDerivedStateFromProps(props, state) {
        if(state.itemsInCart !== props.itemsInCart) {
            return {
                itemsInCart: props.itemsInCart,
                orderAddedToDb: props.orderAddedToDb,
                orderItemAddedToDb: props.orderItemAddedToDb,
            }
        }
        if(state.orderAddedToDb !== props.orderAddedToDb) {
            return {
                orderAddedToDb: props.orderAddedToDb,
            }
        }
        if(state.orderItemAddedToDb !== props.orderItemAddedToDb) {
            return {
                orderItemAddedToDb: props.orderItemAddedToDb,
            }
        }
        
        if(state.maxId !== props.maxId) {
            return {
                maxId: props.maxId
            }
        }

        return null
    }


    componentDidUpdate() {
        if(this.state.orderAddedToDb === true && this.state.orderItemAddedToDb === true) {
            alert("Uspješno ste poslali narudžbu")
            this.resetValuesForStorage()
            let path = userPath.homePage
            this.props.history.push(path) 
        }
    }

    resetValuesForStorage = () => {
        localStorage.removeItem('code')
        localStorage.removeItem('company')
        localStorage.removeItem('shop')
        //print details
        localStorage.removeItem('invoiceHeader')
        localStorage.removeItem('invoiceItem')
        localStorage.removeItem('companyDetails')

    }

    showModalClick = () => {
        //call function to get max id
        this.props.getMaxId()

        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    sendOdrer = () => {
        let user = JSON.parse(localStorage.getItem('user'))
        let warehouse = JSON.parse(localStorage.getItem('warehouse'))
        let company = JSON.parse(localStorage.getItem('company'))
        let shop = JSON.parse(localStorage.getItem('shop'))
        let code = JSON.parse(localStorage.getItem('code'))

        let items = JSON.parse(localStorage.getItem('cart'))
        
        // if items in cart exists
        if(items !== null) {
            let header = {
                nbr: parseInt(this.state.maxId) + 1,
                user: user.id,
                warehouse: warehouse.id,
                company: company.value,
                shop: shop.value,
                date: moment(new Date()).format("YYYY-MM-DD 00:00:00"),
                date2: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                code: code.value
            }
            //send order herader in DB
            this.props.sendOrder(header)
    
            //manage with items in make JSON list to request - order items
            let jsonItems = []
            items.forEach((item, index) => {
                let itm = {
                    broj: parseInt(this.state.maxId) + 1,
                    rbr: index + 1,
                    sifra: item.article_id,
                    v_cije: item.price,
                    koli: item.sell,
                    zamjena: item.change,
                    vraceno: item.return
                }
                jsonItems.push(itm)
            this.props.sendOrderItem(itm)
            });
            jsonItems = []
            this.closeModal()
            localStorage.removeItem('cart')
        } else {
            alert('Korpa je prazna!')
            this.closeModal()
        }
    }



    render() {
        let shoppingCartItems = JSON.parse(localStorage.getItem('cart'))

        return(
            <Card className="articlesCard bck">
                
                <Table bordered>
                    <thead className="tbodyAligment">
                        <tr>
                            <th>Naziv</th>
                            <th>Pro.</th>
                            <th>Zam.</th>
                            <th>Vra.</th>
                        </tr>
                    </thead>

                    <tbody className="tbodyAligment">
                        {
                            shoppingCartItems !== null 
                            ?
                            shoppingCartItems.map((item, index)=> {
                                return <ShoppingCartItem
                                        key={index}
                                        article_id={item.article_id}
                                        article_name={item.article_name}
                                        sell={item.sell}
                                        change={item.change}
                                        return={item.return}
                                        changeDetails={this.props.changeDetails}
                                        deleteItem={this.props.deleteItem}
                                    />
                            })
                            :
                            <tr>
                                <td>Korpa je prazna!</td>   
                            </tr>
                        }
                    </tbody>
                </Table>
                <Button color="info" className="sendRequestButton" onClick={this.showModalClick}>Pošalji narudžbu</Button>

                <ModalSendOrder 
                    sureMessage="Da li ste sigurni?"
                    showModal={this.state.showModal}
                    closeModal={this.closeModal}
                    sendOdrer={this.sendOdrer}
                    // orderItemAddedToDb={this.orderItemAddedToDb}
                    items={this.props.items}
                />


            </Card>
            

        )
    }
}

export default withRouter(ShoppingCart)