import Header from './componentes/Header';
import Form from './componentes/Form';
import Card from './componentes/Card';
import React, {useState} from 'react';
import './App.css';

function App() {

  const res = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires,argentina&APPID=467eb2e2a1738c82e813a30610d7c354")

  const [lugarForm, setLugarForm] = useState(
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
          <Form lugarForm={lugarForm} setLugarForm={setLugarForm}/>
          </div>
          <div style={{flex: 1}}>
          <Card lugarForm={lugarForm}/>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
