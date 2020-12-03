
import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const NavBar = props => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Kandy Korner</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/product_types">Product Types</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
        </ul>
    )
}