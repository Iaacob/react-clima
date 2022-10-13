import Header from './componentes/Navbar';
import Form from './componentes/Form';
import Card from './componentes/Card';
import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [lugar, setLugar] = useState(
    {
      pais:"",
      ciudad:""
    }
  )

  const [clima,setClima] = useState(
    null
  )

  useEffect(()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${lugar.ciudad},${lugar.pais}&APPID=467eb2e2a1738c82e813a30610d7c354`)
    .then(result=>{
      setClima(result.data)
    })
    .catch(error=>{
      console.log(error);
    })
  },[lugar])

  console.log('clima',clima)

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
