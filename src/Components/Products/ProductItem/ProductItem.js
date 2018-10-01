import React, { Component, Fragment } from 'react';
import classes from './ProductItem.css'
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux'
// import Modal from '../../UI/Modal/Modal';
import {Toggle} from 'Utilities';
import {Modal} from 'Elements';


class ProductItem extends Component {
    state = { 
        clicked: false
     }



    render() {
        let {name, description, image} = this.props.product;
        let {onAddToCartClicked} = this.props
        let style = { 
            backgroundImage: 'url(' + image + ')',
        };

        const unClickedCard = (
            <div className={classes.card}>
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
            <div >
            <article>
                <header id={image}><img src={image} alt=""/>
                </header>
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Button clicked={onAddToCartClicked} btnType="Success">ADD TO CART</Button>
                </div>
            </article>
            </div> 
        )

        

        return (
            <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <div onClick={toggle}>{unClickedCard}</div>

                <Modal on={on} toggle={toggle}>
                  {clickedCard}
                </Modal>
              </Fragment>
  
            )}
          </Toggle> 
        );
    }
}


export default ProductItem;