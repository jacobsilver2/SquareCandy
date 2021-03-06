import React, { Component } from 'react';
import classes from './ProductItem.css'
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux'
import Modal from '../../UI/Modal/Modal';


class ProductItem extends Component {
    state = { 
        clicked: false
     }

    handleClick = () => {
        this.setState({
            clicked: true
        });
    }

    handleUnclick = () => {
        this.setState({
            clicked: false
        });
    }

    render() {
        let {name, description, image} = this.props.product;
        let {onAddToCartClicked} = this.props
        let style = { 
            backgroundImage: 'url(' + image + ')',
        };

        const unClickedCard = (
            <div className={classes.card} onClick={this.handleClick}>
            <article>
                <header style={style} id={image} className={classes.cardheader}>
                </header>
                <div className={classes.cardbody}>
                    <h2>{name}</h2>
                    <p className={classes.bodycontent}>{description}</p>
                    {/* <Button clicked={onAddToCartClicked} btnType="Success">Add To Cart</Button> */}
                </div>
            </article>
            </div> 
        )

        const clickedCard = (
            <div className={classes.card} onClick={this.handleClick}>
            <article>
                <header style={style} id={image} className={classes.cardheader}>
                </header>
                <div className={classes.cardbody}>
                    <h2>{name}</h2>
                    <p className={classes.bodycontent}>{description}</p>
                    <Button clicked={onAddToCartClicked} btnType="Success">ADD TO CART</Button>
                </div>
            </article>
            </div> 
        )

        

        return (
            <Aux>
                <Modal show={this.state.clicked} modalClosed={this.handleUnclick}>
                    {clickedCard}
                </Modal>
                {unClickedCard}
            </Aux>
        );
    }
}

export default ProductItem;