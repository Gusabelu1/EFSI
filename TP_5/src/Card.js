import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cardd() {
  return (
    <Card style={{ width: '32.5rem' }}>
      <Card.Body>
       <p>Mascota: <span></span></p>
       <p>Dueño: <span></span></p>
       <p>Fecha: <span></span></p>
       <p>Hora: <span></span></p>
       <p>Sintomas: <span></span></p>
       <Button variant="primary" type="submit" className="w-100 boton2">
        ELIMINAR x
      </Button>
      </Card.Body>
    </Card>
  );
}

export default Cardd;