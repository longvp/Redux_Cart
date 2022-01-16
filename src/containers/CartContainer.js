import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from "../components/Cart";
import * as Message from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as actions from "../actions/index";

class CartContainer extends React.Component {

    showCartItem = (cart) => {
        let result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((cartItem) => {
                return <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    handleDeleteProductInCart={this.props.handleDeleteProductInCart}
                    handleChangeMessage={this.props.handleChangeMessage}
                    handleUpdateQuantity={this.props.handleUpdateQuantity}
                />;
            })
        }
        return result;
    }

    showCartResult = (cart) => {
        let totalPrice = cart.reduce((total, cartItem) => {
            return total + cartItem.product.price * cartItem.quantity;
        }, 0)
        return <CartResult totalPrice={totalPrice} />
    }

    render() {
        let { cart } = this.props;
        return (
            <>
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showCartResult(cart)}
                </Cart>
            </>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleDeleteProductInCart: (product) => {
            dispatch(actions.deleteProductInCart(product));
        },
        handleChangeMessage: (message) => {
            dispatch(actions.changeMessage(message));
        },
        handleUpdateQuantity: (product, quantity) => {
            dispatch(actions.updateQuantity(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);