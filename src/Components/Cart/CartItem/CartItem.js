import React from 'react';

const cartItem = ({id, name, quantity, price, remove}) => (
        <tr key={id}>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${price}.00</td>
            <td><button onClick={remove}>REMOVE</button></td>
        </tr>
);

export default cartItem;