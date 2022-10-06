import React from 'react'


const Card = ({ clima }) => {



    return clima ?  (
        

        <div className="card-panel white col s12">
                        <div className="black-text">
                            <h2>El clima de Buenos Aires es:</h2>
                            
                            <p className="temperatura">
                                {clima.temp - 273.15} <span> &#x2103; </span>
                            </p>
                            <p>
                                Temperatura Maxima
                                {clima.temp_max - 273.15} <span> &#x2103; </span>
                            </p>
                            <p>
                                Temperatura Minima
                                {clima.temp_min - 273.15} <span> &#x2103; </span>
                            </p>
                        </div>
                    </div>

    ) : null
}

export default Card

