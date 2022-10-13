import React, { useState } from 'react'
 
const Form = ({ setLugar }) => {
 
    const [lugarForm, setLugarForm] = useState({
        pais: "AR",
        ciudad: ""
    })

    const {pais,ciudad} = lugarForm;
 
    const [error, setError] = useState(false);
 
    const handleChange = (e) => {
        setLugarForm({
            ...lugarForm,
            [e.target.name]: e.target.value
        })
    }
 
    const handleSubmit = (e) => {        
        e.preventDefault();
 
        console.log('aaa')
 
        setLugar(lugarForm)
 
        if (pais === '' || ciudad === '') {
            setError(true)
            return;
        }
 
        setError(false)
 
    }
 
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">DEBE COMPLETAR TODOS LOS CAMPOS</div> }
 
            <div className="input-field col s12">
                <label htmlFor="ciudad" className="active">Ciudad:</label>
                <input type="text" name="ciudad" id="ciudad" onChange={handleChange} style={{ color: '#000' }}></input>
            </div>
 
            <div className="input-field col s12">                
                <select name="pais" id="pais" onChange={handleChange} value={pais}>
                    <option value="">-- Seleccion un Pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>                
                <label htmlfor="pais">Pais:</label>
            </div>
 
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
 
    )
}
 
export default Form
