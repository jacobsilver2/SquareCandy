import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
// import classes from './About.css';
// import Aux from '../../hoc/Aux/Aux';
// import Modal from '../UI/Modal/Modal';
import {Toggle} from 'utilities';
import {Modal} from 'elements';

class About extends Component {
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

        // const clickedAbout = (
        //     <div onClick={this.handleClose}>
        //         <h1>ABOUT PAGE</h1>
        //     </div>
        // )

        return (
            <Toggle>
                {({on, toggle}) => (
                    <Fragment>
                        <Modal on={on} toggle={toggle}>
                            <h1>About Page</h1>
                        </Modal>
                    </Fragment>
                )}
            </Toggle>
        );
    }
}

export default About;
