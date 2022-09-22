import React, {useState} from 'react'

const Form = ({setLugar}) => {

    const [lugarForm, setLugarForm] = useState({
        pais:"",
        ciudad:""
    })

    const [error,setError] = useState(false);





    const handleChange = (e) => {
        setLugarForm({
            ...lugarForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.prevenDefault();

        setLugar(lugarForm)

        if(lugarForm.pais==='' || lugarForm.ciudad===''){
            setError(true)
            return;
        }

        setError(false)
    }
    
    return (
        <form onSubmit={handleSubmit}>
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