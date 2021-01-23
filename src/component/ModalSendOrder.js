import React from 'react'

import 'react-responsive-modal/styles.css';

import {Modal} from 'react-responsive-modal'

export default class ModalSendOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.showModal !== prevProps.showModal) {
            return {
                showModal: nextProps.showModal
            }
        }
        return null
    }

    sendAllInvoiceDetails = () => {
        this.props.sendOdrer()
    }

    render() {

        return(
            <Modal  open={this.state.showModal} onClose={this.props.closeModal} center >
                <div className="modalStyle">
                    <h6>Pošalji narudzbinu?</h6>

                    <div className="modalContent">
                        <button className="btn btn-primary btn-sm bntModal" onClick={this.sendAllInvoiceDetails}>Pošalji</button>
                    </div>
                </div>
            </Modal>
        )
    }
}