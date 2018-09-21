//! Dependencies
import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//! Components
// import Products from './Components/Products/Products';
import ProductsContainer from './Containers/ProductsContainer/ProductsContainer';
import Layout from './hoc/Layout/Layout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import CheckoutPage from './Components/Stripe/CheckoutPage/CheckoutPage'
import AddProduct from './Components/Products/AddProduct/AddProduct'
import Auth from './Containers/Auth/Auth'
import Logout from './Containers/Auth/Logout/Logout'

//! Actions
import * as actions from './store/actions/index';

//! ────────────────────────────────────────────────────────────────────────────────
class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {
    
    let routes = (
      <Switch>
        <Route path="/" exact component={ProductsContainer}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={CheckoutPage}/>
        <Redirect to="/"/>
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={ProductsContainer}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/add-product" component={AddProduct}/>
        </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

//! ─── REDUX ──────────────────────────────────────────────────────────────────────
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

 //! ─── EXPORT ─────────────────────────────────────────────────────────────────────
//using withRouter allows react router to work with connect
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
