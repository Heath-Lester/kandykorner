
import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { Location } from "./Locations"
import "./Locations.css"

export const LocationList = () => {

    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        console.log("LocationList: Intitial render before data")
        getLocations()
    }, [])

    return (
        <div className="locations">
            {
                locations.map(locale => <Location key={locale.id} location={locale} />)
            }
        </div>
    )
}


