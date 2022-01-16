import React from "react";
import * as Message from "../constants/Message";

class CartItem extends React.Component {

    handleUpdateQuantity = (product, quantity) => {
        this.props.handleUpdateQuantity(product, quantity);
    }

    handleDeleteProductInCart = (product) => {
        let confirm = window.confirm("Do you want to delete ???");
        if (confirm) {
            this.props.handleDeleteProductInCart(product);
            this.props.handleChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
        }
    }

    render() {
        let { cartItem } = this.props;
        return (
            <>
                <tr>
                    <th scope="row">
                        <img src={cartItem.product.image} alt className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{cartItem.product.name}</strong>
                        </h5>
                    </td>
                    <td>{cartItem.product.price}$</td>
                    <td className="center-on-small-only">
                        <span className="qty">{cartItem.quantity}</span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light"
                                onClick={() => this.handleUpdateQuantity(cartItem.product, cartItem.quantity - 1)}>
                                <a>—</a>
                            </label>
                            <label className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light"
                                onClick={() => this.handleUpdateQuantity(cartItem.product, cartItem.quantity + 1)}>
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td>{cartItem.product.price * cartItem.quantity}$</td>
                    <td>
                        <button type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light"
                            data-toggle="tooltip" data-placement="top"
                            title data-original-title="Remove item"
                            onClick={() => this.handleDeleteProductInCart(cartItem.product)}>
                            X
                        </button>
                    </td>
                </tr>
            </>
        )
    }
}

export default CartItem;