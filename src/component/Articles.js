import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button, Table} from 'reactstrap'
import { userPath } from '../constants/path.constants'
import ArticleItem from './singleComponents/ArticleItem'

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            error: "",
        }
    }

    componentDidMount() {
        //get articles for warehouse
        let warehouse = JSON.parse(localStorage.getItem('warehouse'))
        this.props.getArticles(warehouse.id)

    }

    static getDerivedStateFromProps(props, state) {
        if(props.articles !== state.articles) {
            return {
                articles: props.articles
            }
        }
        if(props.error !== state.error) {
            return {
                error: props.error
            }
        }
        return null
    } 

    componentDidUpdate() {
        //reset shopping cart
        this.props.resetShoppingCart()
    }

    goToShoppingCart = () => {
        let path = userPath.shoppingCart
        this.props.history.push(path)
    }


    render() {
        return(
            <Card className="articlesCard bck">
                
                <Button className="loginBtn" color="info" onClick={this.goToShoppingCart}>Pregled narudžbe</Button>
                <div className="errorAddingItem">
                {
                    this.state.error
                }
                </div>
                
                <Table bordered>
                    <thead className="tbodyAligment">
                        <tr>
                            <th>Naziv</th>
                            <th>Pro.</th>
                            <th>Zam.</th>
                            <th>Vra.</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody className="tbodyAligment">
                        {
                            this.state.articles !== undefined 
                            ?
                            this.state.articles.map(item => {
                                return <ArticleItem 
                                    key={item.id}
                                    name={item.article_name}
                                    article_id={item.article_id}
                                    price={item.price}
                                    addItemToCart={this.props.addItemToCart}
                                />
                            })
                            : ""
                        }
                    </tbody>
                </Table>
                <Button color="info" onClick={this.goToShoppingCart}>Pregled narudžbe</Button>
            </Card>
        )
    }
}

export default withRouter(Articles)