import Header from './componentes/Navbar';
import Form from './componentes/Form';
import Card from './componentes/Card';
import React, {useState} from 'react';
import { useEffect } from 'react';

function App() {

  const [lugar, setLugar] = useState(
    {
      pais:"",
      ciudad:""
    }
  )

  const [clima,setClima] = useState(null)

  useEffect(()=>{
    //llamo a api
  },[lugar])

  return (
    <>
      <Header/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form lugar={lugar} setLugar={setLugar}/>
            </div>
            <div className="col m6 s12">
              <Card clima={clima}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
