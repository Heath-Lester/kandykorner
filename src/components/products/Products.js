
import React from "react"
import "./Products.css"

export const Products = (props) => {
    console.log("props", props)
    return (
        <section className="product">
            <h3 className="product__name">{props.product.name}</h3>
            <div className="product__price">${props.product.price}</div>
            <div className="product__category">Category: {props.productType.name}</div>
        </section>
    )
}