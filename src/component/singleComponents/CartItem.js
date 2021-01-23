import React from 'react'
import { withRouter } from 'react-router-dom'
import plus from '../../assets/plus.png'


class CartItem extends React.Component {
    render() {
        return(
            <tr>
                <td style={{'width': '40%'}}>Artikal 1 Artikal Artikal Artikal Artikal</td>
                <td style={{'width': '15%'}}>0</td>
                <td style={{'width': '15%'}}>0</td>
                <td style={{'width': '15%'}}>0</td>
                <td style={{'width': '15%'}}>
                    <img src={plus} alt="plus" />
                </td>
        </tr>
        )
    }
}

export default withRouter(CartItem)