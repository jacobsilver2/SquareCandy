// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import * as actions from '../../store/actions/index';
// // import Product from './Product/ProductItem';
// import classes from './Products.css';



// class Products extends Component {

//     render() {

//         // todo: add quantity to products in firebase and in form
//         const products = this.props.products.map(product => {
//             return <Product 
//                 name={product.name}
//                 description={product.description}
//                 image={product.image}
//                 key={product.image}
//             />
//         })

//         return (
//                 <div className={classes.Products}>
//                     {products}
//                 </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         products: state.products.products,
//         loading: state.products.loading
//     }
// }

// // const mapDispatchToProps = dispatch => {
// //     return {
// //         onFetchProducts: () => dispatch(actions.getProducts())
// //     }
// // }

// export default connect(mapStateToProps)(Products);