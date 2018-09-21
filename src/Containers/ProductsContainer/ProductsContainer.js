import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cart';
import ProductItem from '../../Components/Products/ProductItem/ProductItem';
import ProductsList from '../../Components/Products/ProductsList/ProductsList'

const ProductsContainer = ({ products, addToCart }) => (
    <ProductsList>
        {products.map(product => 
            <ProductItem 
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)}
            />
        )}
    </ProductsList>
);

const mapStateToProps = state => {
    return {
        products: state.products.products,
        loading: state.products.loading
    }
}

export default connect(mapStateToProps, { addToCart })(ProductsContainer);