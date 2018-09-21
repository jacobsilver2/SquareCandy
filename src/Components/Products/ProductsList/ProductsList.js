import React from 'react';
import classes from './ProductsList.css'

const ProductsList = ({ children }) => (
    <div>
        <div className={classes.ProductsList}>{children}</div>
    </div>
);

export default ProductsList;