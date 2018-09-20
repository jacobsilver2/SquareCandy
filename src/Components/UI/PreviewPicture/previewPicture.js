import React from 'react';
import classes from './previewPicture.css';

const previewPicture = ({pictureUrl}) => {
    return (
        <img className={classes.img} src={pictureUrl} alt=""/>
    );
}

export default previewPicture;