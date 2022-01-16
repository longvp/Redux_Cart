import React from "react";
import { connect } from 'react-redux';
import Product from "../components/Product";
import Products from "../components/Products";
import PropTypes from "prop-types";
import * as actions from "../actions/index"

class ProductsContainer extends React.Component {

    showProduct = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product) => {
                return <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={this.props.handleAddToCart}
                    handleChangeMessage={this.props.handleChangeMessage}
                />;
            })
        }
        return result;
    }

    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }
}


ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    handleChangeMessage: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddToCart: (product) => {
            dispatch(actions.addToCart(product, 1));
        },
        handleChangeMessage: (message) => {
            dispatch(actions.changeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);