import React, { useState } from 'react'
import axios from "axios"


const Card = ({ lugar }) => {
    const [clima, setClima] = useState({});

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de  {lugar.ciudad}, {lugar.pais} es:</h2>
                <p>{clima}</p>
            </div>
        </div>

    )
}

export default Card

