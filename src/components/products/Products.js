
import React from "react"
import "./Products.css"

export const Products = ({ product }) => {
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">${product.price}</div>
        <div className="product__category">Category: {product.category}</div>
    </section>
}