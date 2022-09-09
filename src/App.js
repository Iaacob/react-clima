import Header from './componentes/Header';
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
    <div className="App">
      <div className="container">
        <div className="row">
          <Header/>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: 1}}>
          <Form lugar={lugar} setLugar={setLugar}/>
          </div>
          <div style={{flex: 1}}>
          <Card lugar={lugar}/>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
