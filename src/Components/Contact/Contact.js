import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Contact.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../UI/Modal/Modal';

class Contact extends Component {
    state = { modal: true }

    componentDidMount() {
        const { state = {} } = this.props.location;
        const { modal } = state;
        this.setState({
            modal
        })
    }

    handleClose = () => {
        this.setState({ modal: false });
    }


    render() {
        if (this.state.modal === false ) {
            return <Redirect to="/" />
        }

        const clickedContact = (
            <div onClick={this.handleClose}>
                <h1>CONTACT PAGE</h1>
            </div>
        )

        return (
            <Aux>
                <Modal show={this.state.modal} modalClosed={this.handleClose}>
                    {clickedContact}
                </Modal>
            </Aux>
        );
    }
}

export default Contact;
