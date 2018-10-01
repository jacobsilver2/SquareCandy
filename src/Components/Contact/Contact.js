import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router-dom';
// import classes from './Contact.css';
// import Modal from '../UI/Modal/Modal';
import {Toggle} from 'Utilities';
import {Modal} from 'Elements';

class Contact extends Component {
    // state = { modal: true }

    // componentDidMount() {
    //     const { state = {} } = this.props.location;
    //     const { modal } = state;
    //     this.setState({
    //         modal
    //     })
    // }

    // handleClose = () => {
    //     this.setState({ modal: false });
    // }



    render() {
        // if (this.state.modal === false ) {
        //     return <Redirect to="/" />
        // }

        // const clickedContact = (
        //     <div onClick={this.handleClose}>
        //         <h1>CONTACT PAGE</h1>
        //     </div>
        // )

        return (
            <h1>Contact Page</h1>
        );
    }
}

export default Contact;
