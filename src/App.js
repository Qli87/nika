import React from 'react';
// import './App.css';
import './assets/index.css'
import './assets/print.css'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginCnt from './container/LoginCnt';
import HomePageCnt from './container/HomePageCnt';
import ArticlesCnt from './container/ArticlesCnt';
import ShoppingCartCnt from './container/ShoppingCartCnt';
import { userPath } from './constants/path.constants';
import InvoiceListCnt from './container/InvoiceListCnt';
import InvoiceDetailsCnt from './container/InvoiceDetailsCnt';
import ReturnDetailsCnt from './container/ReturnDetailsCnt';
import PrivateRoute from './component/PrivateRoute';

const hist = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={hist}>
          <Switch>
            <Route path={userPath.login} component={LoginCnt} />
            <PrivateRoute path={userPath.homePage} component={HomePageCnt} />
            <PrivateRoute path={userPath.articles} component={ArticlesCnt} />
            <PrivateRoute path={userPath.shoppingCart} component={ShoppingCartCnt} />
            <PrivateRoute path={userPath.invoices} component={InvoiceListCnt} />
            <PrivateRoute path={userPath.inoviceDetails} component={InvoiceDetailsCnt} />
            <PrivateRoute path={userPath.returnDetails} component={ReturnDetailsCnt} />
          </Switch>
      </Router>
    )
  }
}

export default App;


