
import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Products } from "./Products"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"
import "./Products.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)
    
    useEffect(() => {
        console.log("Product list pinged.")
        getProductTypes()
            .then(getProducts)
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {
                    const productType = productTypes.find(type => type.id === product.category)

                    return <Products key={product.id} product={product} productType={productType} />
                })
            }
        </div>
    )
}