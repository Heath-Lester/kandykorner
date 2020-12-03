
import React, { useContext, useState, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Products } from "./Products"
import "./Products.css"

export const ProductList = props => {

    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        console.log("Product list pinged.")
        getProducts()
    }, [])

    return (
        <div className="products">
            {
                products.map(poduct => <Products key={products.id} product={product} />)
            }
        </div>
    )
}