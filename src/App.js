import Header from './componentes/Header';
import Form from './componentes/Form';
import Card from './componentes/Card';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <div className="container">
        <div className="row">
          <Header/>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: 1}}>
          <Form/>
          </div>
          <div style={{flex: 1}}>
          <Card/>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
