import React from "react";
import products from "../reducers/products";
import * as Message from "../constants/Message";

class Product extends React.Component {

    showRatingProduct = (productRating) => {
        let result = [];
        for (let i = 0; i < productRating; i++) {
            result.push(<i className="fa fa-star"></i>)
        }
        for (let i = 0; i < (5 - productRating); i++) {
            result.push(<i className="fa fa-star-o"></i>)
        }
        return result;
    }

    handleAddToCart = (product) => {
        this.props.handleAddToCart(product);
        this.props.handleChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

    render() {
        let { product } = this.props;
        return (
            <>
                <div className="col-lg-4 col-md-6 mb-r">
                    <div className="card text-center card-cascade narrower">
                        <div className="view overlay hm-white-slight z-depth-1">
                            <img src={product.image} className="img-fluid" alt={product.name} />
                            <a>
                                <div className="mask waves-light waves-effect waves-light" />
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">
                                <strong>
                                    <a>{product.name}</a>
                                </strong>
                            </h4>
                            <ul className="rating">
                                {
                                    this.showRatingProduct(product.rating)
                                }
                            </ul>
                            <p className="card-text">
                                {product.description}
                            </p>
                            <div className="card-footer">
                                <span className="left">{product.price}$</span>
                                <span className="right">
                                    <a className="btn-floating blue-gradient"
                                        data-toggle="tooltip" data-placement="top"
                                        title data-original-title="Add to Cart"
                                        onClick={() => this.handleAddToCart(product)}>
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div></>
        )
    }
}



export default Product;