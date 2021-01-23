import React from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Card, CardBody, Form, FormGroup, Label, Button, Input} from 'reactstrap'
import Select from 'react-select'
import { userPath } from '../constants/path.constants';



import { css } from "@emotion/core";
import ClipLoader from "react-spinners/RingLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            companies: [],
            shops: [],
            selectedCompany: [],
            selectedCode: [],
            selectedShop: [],
            warehouse: [],



            isLoading: false
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        if(token !== null) {
            this.props.getLoggedUser(token)
        }
        this.props.getCompaniesForSelect()

        //if company is selected, call function to get all shops for company
        if(localStorage.getItem('company') !== null) {
            let cmp = JSON.parse(localStorage.getItem('company'))
            this.props.getShopsForCmp(cmp.value)
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.companies !== state.companies) {
            return {
                companies: props.companies
            }
        }
        if(props.shops !== state.shops) {
            return {
                shops: props.shops
            }
        }
        if(props.warehouse !== state.warehouse) {
            return {
                warehouse: props.warehouse
            }
        }

        return null
    }   

    changeCode = (code) => {
        //call functions to get warehouse for user!!!!
        let user = JSON.parse(localStorage.getItem('user'))
        let _user_id
        if((user).id < 10) {
            _user_id = "0" + user.id
        } else {
            _user_id = user.id
        }
        this.props.getWarehouse(_user_id)

        localStorage.setItem('code', JSON.stringify(code))
        this.setState({selectedCode: code})
    }

    changeCompany = (cmp) => {
        //add company in local storage
        localStorage.setItem('company', JSON.stringify(cmp))
        //get shops for company
        this.props.getShopsForCmp(cmp.value)

        this.setState({selectedCompany: cmp})
    }

    changeShop = (shop) => {
        //add shop in local storage
        localStorage.setItem('shop', JSON.stringify(shop))
        this.setState({
            selectedShop: shop
        })
    }

    nextClick = () => {
        if(JSON.parse(localStorage.getItem('code')) !== null 
            && JSON.parse(localStorage.getItem('company')) !== null
            && JSON.parse(localStorage.getItem('shop')) !== null) {
                let path = userPath.articles
                this.props.history.push(path)
            } else {
            alert("Morate popuniti tražena polja!")
        }
    }
    
    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    invoiceList = () => {
        let path = userPath.invoices
        this.props.history.push(path)
    }

    timeOut = () => {
        this.setState({
            isLoading: true
        })
        setTimeout(
            this.invoiceList, 
            3000
          );
    }

    render() {

        let code = [
            {value: "G", label: "Gotovina"},
            {value: "P", label: "Pravno lice"}
        ]
        let user = JSON.parse(localStorage.getItem('user'))

        return(
            <Card className="height-style bck" style={{'padding':'0'}}>
                {
                    this.state.isLoading === true
                    ?
                    <div style={{'marginTop':'50%'}}>
                        <ClipLoader 
                            css={override}
                            size={150}
                            color={"#123abc"}
                            loading={true}
                        />
                    </div>

                    :

                    <CardBody>
                    <Label className="homePageLabel ">Odaberite komitenta:</Label>

                    <Form className="loginForm">

                    <Col>
                            <FormGroup>
                                <Input type="text" readOnly value={user !== null ? user.name : ""}/>
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Select placeholder="Odaberite kod"
                                    options={code}
                                    value={JSON.parse(localStorage.getItem('code'))}
                                    onChange={this.changeCode}
                                />
                            </FormGroup>
                        </Col>
                    
                        <Col>
                            <FormGroup>
                                <Select placeholder="Odaberite firmu"
                                    options={this.state.companies}
                                    value={JSON.parse(localStorage.getItem('company'))}
                                    onChange={this.changeCompany}
                                    />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Select placeholder="Odaberite prodavnicu"
                                    options={this.state.shops}
                                    value={JSON.parse(localStorage.getItem('shop'))}
                                    onChange={this.changeShop}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Button className="shadowButton loginBtn invoiceListBtn" color="primary"
                                    onClick={this.nextClick}
                                >
                                    Nastavi
                                </Button>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Button className="shadowButton loginBtn invoiceListBtn" color="success" onClick={this.timeOut}>Pregled računa</Button>
                        </Col>
                        <Col>
                            <Button className="shadowButton loginBtn" color="danger" onClick={this.logout}>Logout</Button>
                        </Col>

                    </Form>
                

                </CardBody>
                }



            </Card>

        )
    }
}

export default withRouter(HomePage)