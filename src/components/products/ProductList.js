
import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Products } from "./Products"
import "./Products.css"

export const ProductList = () => {
    // debugger
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        console.log("Product list pinged.")
        getProducts()
        console.log("Products", products)
    }, [])

    return (
        <div className="products">
            {
                products.map(product => <Products key={product.id} product={product} />)
            }
        </div>
    )
}