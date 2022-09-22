import Header from './componentes/Navbar';
import Form from './componentes/Form';
import Card from './componentes/Card';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [lugar, setLugar] = useState(
  {
    pais:"",
    ciudad:""
  }
  )

  return (
    <>
      <Header/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div class="col m6 s12">
              <Form lugar={lugar} setLugar={setLugar}/>
            </div>
            <div class="col m6 s12">
              <Card lugar={lugar}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
