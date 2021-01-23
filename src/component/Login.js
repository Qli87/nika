import React from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Card, CardBody, Form, FormGroup, Input, Button, CardTitle } from 'reactstrap'
import logo from '../assets/mils-logo.png'


import { css } from "@emotion/core";
// import ClipLoader from "react-spinners/CircleLoader";
// import ClipLoader from "react-spinners/BarLoader";
// import ClipLoader from "react-spinners/FadeLoader";
// import ClipLoader from "react-spinners/PuffLoader";
import ClipLoader from "react-spinners/RingLoader";
import { userPath } from '../constants/path.constants';
// import ClipLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            token: "",
            isLoading: false
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        if(token !== null) {
            let path = userPath.homePage
            this.props.history.push(path)
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.token !== state.token) {
            return {
                token: props.token
            }
        }
        if(props.error !== state.error) {
            return {
                error: props.error,
                isLoading: false
            }
        }
        return null
    }   

    componentDidUpdate() {
        let token = localStorage.getItem('token')
        if(token !== null) {
            let path = userPath.homePage
            this.props.history.push(path)
        }
    }


    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault()

        // let credentials = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // this.props.login(credentials)
        // this.setState({
        //     isLoading: true
        // })

        if(this.state.email.length === 0 || this.state.password.length === 0) {
            alert("Polja e-mail i password su obavezna")
          } else {
             if(this.state.email !== 'undefined') {
                 if(!this.state.email.match(/[^@]+@[^.]+\..+/)) {
                     alert("E-mail nije ispravnog formata")
                 } else {
                     let credentials = {
                         email: this.state.email,
                         password: this.state.password
                     }
                     this.props.login(credentials)
                     this.setState({isLoading: true})
                     this.resetFields()
                 }
             } 
         }
    }

    resetFields = () => {
        this.setState({
            email : '',
            password: ''
        })
    }


    render() {
        return(
            // bck
            <Card className="height-style bck">
                <CardBody>
                    <CardTitle className="loginCardTitle">
                        <img src={logo} alt="logo" style={{'height':'110px', }}/>
                    </CardTitle>
                    

                    
                    <Form className="loginForm">
                    


                    {
                        this.state.isLoading ?
                        <>
                            <ClipLoader
                            css={override}
                            size={150}
                            color={"#123abc"}
                            loading={true}
                            />
                        </>

                        :
                        <>
                        <Col >
                            <FormGroup>
                                <CardTitle>
                                    <p style={{'textAlign':'center', 'color':'red', 'fontWeight':'bold'}}>
                                        {this.state.error}
                                    </p>
                                </CardTitle>
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Input type="email" 
                                    name="email" 
                                    placeholder="E-mail" 
                                    onChange={this.changeEmail}
                                    required
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                {/* <Label for="exampleEmail">Password</Label> */}
                                <Input className="loginCmpRadius" 
                                    type="password" 
                                    name="password" 
                                    placeholder="*******" 
                                    onChange={this.changePassword}
                                    required
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                {/* <Label for="exampleEmail">Password</Label> */}
                                <Button className="loginBtn" color="primary" onClick={this.submitForm}>
                                    Login
                                </Button>
                            </FormGroup>
                        </Col>
                        </>
                    }





                    </Form>

                </CardBody>
            </Card>
        )
    }
}

export default withRouter(Login)