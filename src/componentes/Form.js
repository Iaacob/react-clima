import React, {useState} from 'react'

const Form = ({setLugar}) => {

    const [lugarForm, setLugarForm] = useState({
        pais:"",
        ciudad:""
    })


    const handleChange = (e) => {
        setLugarForm({
            ...lugarForm,
            [e.target.name]: e.target.value
        })
    }
    
    return (
            <form>
                <div className="input-field col s12">
                    <label htmlFor="ciudad" className="active">Ciudad:</label>
                    <input type="text" name="ciudad" id="ciudad" onChange={handleChange} style={{ color: '#000' }}></input>
                </div>
                <div className="input-field col s12">
                    <div className="select-wrapper">
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
                

                <button onClick={() => { setLugar(lugarForm) }}>Buscar Clima</button>
            </form>

    )
}

export default Form