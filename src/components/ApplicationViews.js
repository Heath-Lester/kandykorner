
import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider"


export const ApplicationViews = props => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <ProductTypeProvider>
                    <Route path="/products" render={
                        props => <ProductList {...props} />
                    } />
                </ProductTypeProvider>
            </ProductProvider>
        </>
    )
}