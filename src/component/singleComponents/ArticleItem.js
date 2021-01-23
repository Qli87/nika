import React from 'react'
import { withRouter } from 'react-router-dom'
import plus from '../../assets/plus.png'


class ArticleItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sell: 0,
            change: 0,
            return: 0
        }
    }

    changeSell = (e) => {
        // if(parseInt(e.target.value) > 0) {
            this.setState({
                sell: e.target.value
            })
        // } 

    }
    changeChange = (e) => {
        this.setState({
            change: e.target.value
        })
    }
    changeReturn = (e) => {
        this.setState({
            return: e.target.value
        })
    }

    addToCart = () => {
        if(this.state.sell !== undefined && this.state.change !== undefined && this.state.return !== undefined) {
            if(this.state.sell !== "" && this.state.change !== "" && this.state.return !== "") {
                let item = {
                    article_id: this.props.article_id,
                    article_name: this.props.name,
                    price: this.props.price,
                    sell: this.state.sell,
                    change: this.state.change,
                    return: this.state.return
                }
                this.props.addItemToCart(item)
            } else {
                alert('Unesite validne količine!')
            }
        }
        this.setState({
            sell: 0,
            change: 0,
            return: 0
        })

    }

    render() {
        return(
            <tr>
                <td style={{'width': '40%'}}>{this.props.name} </td>
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
                    <img src={plus} alt="plus" onClick={this.addToCart}/>
                </td>
            </tr>
        )
    }
}

export default withRouter(ArticleItem)