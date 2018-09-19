//! Dependencies
import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//! Components
import Products from './Components/Products/Products';
import Layout from './hoc/Layout/Layout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';

//! Actions

//! ────────────────────────────────────────────────────────────────────────────────
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Products}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/cart" component={Cart}/>
        <Redirect to="/"/>
      </Switch>
    )
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
