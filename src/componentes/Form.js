import React from 'react'
import axios from "axios"

const Form = ({lugarForm, setLugarForm}) => {

    

    const handleChange = (e) => {
        setLugarForm({
            ...lugarForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <form>
                            <div className="input-field col s12">
                                <label htmlFor="ciudad" className="active">Ciudad:</label>
                                <input type="text" name="ciudad" id="ciudad" onChange={handleChange} style={{color: '#000'}}></input>
                            </div>
                            <div className="input-field col s12">
                                <div className="select-wrapper">
                                    {/* <select className="select-dropdown dropdown-trigger" name="pais" type="" readOnly={true} data-target="select-options-8d2743a6-734a-067b-9260-f2222257c15e" onChange={handleChange}>
                                        <option id="select-options-8d2743a6-734a-067b-9260-f2222257c15e0" tabIndex="0" className="selected"><span>-- Seleccion un Pais --</span></option>
                                        <option id="select-options-8d2743a6-734a-067b-9260-f2222257c15e1" tabIndex="0"><span>Estados Unidos</span></option>
                                        <option id="select-options-8d2743a6-734a-067b-9260-f2222257c15e2" tabIndex="0"><span>México</span></option>
                                        <option id="select-options-8d2743a6-734a-067b-9260-f2222257c15e3" tabIndex="0"><span>Argentina</span></option>
                                        <option id="select-options-8d2743a6-734a-067b-9260-f2222257c15e4" tabIndex="0"><span>Colombia</span></option>
                                        <option id="select-options-8d2743a6-734a-067b-9260-f2222257c15e5" tabIndex="0"><span>Costa Rica</span></option>
                                        <option id="select-options-8d2743a6-734a-067b-9260-f2222257c15e6" tabIndex="0"><span>España</span></option>
                                        <option id="select-options-8d2743a6-734a-067b-9260-f2222257c15e7" tabIndex="0"><span>Perú</span></option>
                                    </select>
                                    <svg className="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10l5 5 5-5z"></path>
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                    </svg> */}
                                    <label htmlFor="pais">Pais:</label>
                                    <select name="pais" id="pais" tabIndex="-1" onChange={handleChange}>
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
                            
                            <button onClick={}>Buscar Clima</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form