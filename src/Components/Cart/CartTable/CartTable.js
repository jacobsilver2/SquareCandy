import React from 'react';
import classes from './CartTable.css';
import CartItem from '../CartItem/CartItem';

const cartTable = ({cartItems, remove, total}) => {

    const items = cartItems.map(item => {
        return <CartItem 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    remove={remove}
                />
    })

    return <div onClick={this.handleClose}>
                    <table className={classes.tableFill}>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                    <h4>Total Price: {total}</h4>
                </div>
};

export default cartTable;