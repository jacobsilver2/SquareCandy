import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import classes from './CheckoutPage.css'

class CheckoutPage extends Component {
    state = {  }
    render() { 
        return ( 
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
            <div className={classes.Checkout}>
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
         );
    }
}
 
export default CheckoutPage;