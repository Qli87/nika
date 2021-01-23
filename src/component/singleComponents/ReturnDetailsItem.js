import React from 'react'
import { withRouter } from 'react-router-dom'

class ReturnDetailsItem extends React.Component {
    render() {
        return(
            <tr>

                {
                    this.props.return > 0
                    ?
                    <>
                        <td>{this.props.rbr + 1}</td>
                        <td>{this.props.item_id}</td>
                        <td>{this.props.barcode}</td>
                        <td>{this.props.item_name}</td>
                        <td>KOM</td>
                        <td>{this.props.return}</td>
                        <td>{this.props.vp_price > 1 ? this.props.vp_price : "0"+this.props.vp_price}</td>
                        <td className="centerAlign">{this.props.discount > 0 ? this.props.discount : 0}</td>
                        <td>{this.props.bp_price > 1 ? this.props.bp_price : "0"+this.props.bp_price}</td>
                        <td>{this.props.tax}</td>
                        <td>{this.props.mp_price > 1 ? this.props.mp_price : "0"+this.props.mp_price}</td>
                        <td>{this.props.total > 1 ? this.props.total : "0"+this.props.total}</td>
                    </>
                    :
                    <td></td>
                }

            </tr>
        )
    }
}

export default withRouter(ReturnDetailsItem)