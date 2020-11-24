import React from "react"
import { LocationProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationList"
// import "./locations/Locations.css"

export const KandyKorner = () => (
    <>
    <article className="locations">
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </article>
    </>
)