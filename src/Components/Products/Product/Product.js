import React from 'react';
import classes from './Product.css'
import Button from '../../UI/Button/Button'
const product = ({name, description, image}) => {
    let style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
        <article className={classes.card}>
            <header style={style} id={image} className={classes.cardheader}>
            </header>
            <div className={classes.cardbody}>
                <h2>{name}</h2>
                <p className={classes.bodycontent}>{description}</p>
                <Button btnType="Success">Add To Cart</Button>
            </div>
        </article>
    )
};

export default product;