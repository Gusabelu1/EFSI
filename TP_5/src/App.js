import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h3>CREAR MI CITA</h3>
             <Form></Form>
            </div>
            <div className='col-md-6'>
              <h3>ADMINISTRA TUS CITAS</h3>
              <div className='justify-content-center d-flex'>
              <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
