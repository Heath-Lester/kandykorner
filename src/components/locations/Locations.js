
import React from "react"
import "./Locations.css"

export const Location = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.address}</h3>
        <div className="location__square_footage">{location.square_footage}sq. ft.</div>
        <div className="location__handicap_accessible">Accessibility: {location.handicap_accessible}</div>
    </section>
)