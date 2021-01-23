import React from 'react'
import { withRouter } from 'react-router-dom'
import del from '../../assets/delete.png'


class ShoppingCartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sell: this.props.sell,
            change: this.props.change,
            return: this.props.return
        }
    }

    changeSell = (e) => {
        let item = {
            article_id: this.props.article_id,
            article_name: this.props.article_name,
            sell: e.target.value,
            change: this.state.change,
            return: this.state.return
        }
        this.props.changeDetails(item)

        this.setState({
            sell: e.target.value
        })
    }
    changeChange = (e) => {
        let item = {
            article_id: this.props.article_id,
            article_name: this.props.article_name,
            sell: this.state.sell,
            change: e.target.value,
            return: this.state.return
        }
        this.props.changeDetails(item)

        this.setState({
            change: e.target.value
        })
    }
    changeReturn = (e) => {
        let item = {
            article_id: this.props.article_id,
            article_name: this.props.article_name,
            sell: this.state.sell,
            change: this.state.change,
            return: e.target.value
        }
        this.props.changeDetails(item)


        this.setState({
            return: e.target.value
        })
    }

    addToCart = () => {
        let item = {
            article_id: this.props.article_id,
            article_name: this.props.name,
            sell: this.state.sell,
            change: this.state.change,
            return: this.state.return
        }

        this.props.addItemToCart(item)

        this.setState({
            sell: 0,
            change: 0,
            return: 0
        })
    }

    deleteItem = () => {
        this.props.deleteItem(this.props.article_id)
    }

    render() {
        return(
            <tr>
                <td style={{'width': '40%'}}>{this.props.article_name} </td>
                <td style={{'width': '15%'}} >
                    <input className="articleInput" type="number" value={this.state.sell} onChange={this.changeSell} onFocus={(e)=>e.target.select()}/>
                </td>
                <td style={{'width': '15%'}} >
                    <input className="articleInput" type="number" value={this.state.change} onChange={this.changeChange} onFocus={(e)=>e.target.select()}/>
                </td>
                <td style={{'width': '15%'}} >
                    <input className="articleInput" type="number" value={this.state.return} onChange={this.changeReturn} onFocus={(e)=>e.target.select()}/>
                </td>
                <td style={{'width': '15%'}}>
                    <img src={del} alt="plus" onClick={() => this.props.deleteItem(this.props.article_id)}/>
                </td>
            </tr>
        )
    }
}

export default withRouter(ShoppingCartItem)