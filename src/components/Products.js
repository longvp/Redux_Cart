import React from "react";
import products from "../reducers/products";
import Product from "./Product";

class Products extends React.Component {

    render() {
        return (
            <>
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {/* Product */}
                        {this.props.children}
                    </div>
                </section>
            </>
        )
    }
}

export default Products;