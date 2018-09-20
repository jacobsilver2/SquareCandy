import React from 'react';
import classes from './Product.css'
import Button from '../../UI/Button/Button'
const product = ({name, description, image}) => {
    let style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
        <div className={classes.card}>
        <article>
            <header style={style} id={image} className={classes.cardheader}>
            </header>
            <div className={classes.cardbody}>
                <h2>{name}</h2>
                <p className={classes.bodycontent}>{description}</p>
                <Button btnType="Success">Add To Cart</Button>
            </div>
        </article>
        </div>
    )
};

export default product;