import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router-dom';
// import classes from './About.css';
import {Toggle} from 'Utilities';
import {Modal} from 'Elements';

class About extends Component {

    render() {
        return (
            <Toggle>
                {({on, toggle}) => (
                    <Fragment>
                        <Modal on={!on} toggle={toggle}>
                            <h1>About Page</h1>
                        </Modal>
                    </Fragment>
                )}
            </Toggle>
        );
    }
}

export default About;
