import React from 'react'
import axios from "axios"

const Form = () => {

    const handleChange = (e) => {
        agregarDato(e.target.name, e.target.value);
    }

    return (
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <form>
                            <div className="input-field col s12">
                                <label htmlFor="ciudad" className="active">Ciudad:</label>
                                <input type="text" name="ciudad" id="ciudad" onChange={handleChange}></input>
                            </div>
                            <div className="input-field col s12">
                                <div className="select-wrapper">
                                    <input className="select-dropdown dropdown-trigger" type="text" readOnly="true" data-target="select-options-8d2743a6-734a-067b-9260-f2222257c15e"></input>
                                    <ul id="select-options-8d2743a6-734a-067b-9260-f2222257c15e" className="dropdown-content select-dropdown" tabIndex="0" style="">
                                        <li id="select-options-8d2743a6-734a-067b-9260-f2222257c15e0" tabIndex="0" className="selected"><span>-- Seleccion un Pais --</span></li>
                                        <li id="select-options-8d2743a6-734a-067b-9260-f2222257c15e1" tabIndex="0"><span>Estados Unidos</span></li>
                                        <li id="select-options-8d2743a6-734a-067b-9260-f2222257c15e2" tabIndex="0"><span>México</span></li>
                                        <li id="select-options-8d2743a6-734a-067b-9260-f2222257c15e3" tabIndex="0"><span>Argentina</span></li>
                                        <li id="select-options-8d2743a6-734a-067b-9260-f2222257c15e4" tabIndex="0"><span>Colombia</span></li>
                                        <li id="select-options-8d2743a6-734a-067b-9260-f2222257c15e5" tabIndex="0"><span>Costa Rica</span></li>
                                        <li id="select-options-8d2743a6-734a-067b-9260-f2222257c15e6" tabIndex="0"><span>España</span></li>
                                        <li id="select-options-8d2743a6-734a-067b-9260-f2222257c15e7" tabIndex="0"><span>Perú</span></li>
                                    </ul>
                                    <svg className="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10l5 5 5-5z"></path>
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                    </svg>
                                    <label htmlFor="pais">Pais:</label>
                                    <select name="pais" id="pais" tabIndex="-1">
                                        <option value="">-- Seleccion un Pais --</option>
                                        <option value="US">Estados Unidos</option>
                                        <option value="MX">México</option>
                                        <option value="AR">Argentina</option>
                                        <option value="CO">Colombia</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="ES">España</option>
                                        <option value="PE">Perú</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div className="input-field col s12">
                                <i className="waves-effect waves-light btn-large btn-block yellow accent-4 waves-input-wrapper" style="">
                                    <input type="submit" value="Buscar Clima" className="waves-button-input"></input></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form