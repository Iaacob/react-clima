import React, { useState } from 'react'
import axios from "axios"


const Card = ({lugar}) => {
    const [clima, setClima] = useState({});

    setClimaAPI("http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires,argentina&APPID=467eb2e2a1738c82e813a30610d7c354", setClima);

    return (
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <div className="card-panel white col s12">
                            <div className="black-text">
                                <h2>El clima de  {lugar.ciudad}, {lugar.pais} es:</h2>
                                <p>{clima.base}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

async function callAPI(url){
    const res = await axios.get(url);
    return res.data;
}
async function setClimaAPI(url, setClima){
    setClima(await callAPI(url));
}