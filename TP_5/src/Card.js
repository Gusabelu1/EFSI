import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cardd(citas) {
  return (
    <Card style={{ width: '32.5rem' }}>
      <Card.Body>
       <p>Mascota: <span>{citas.nomMascota}</span></p>
       <p>Dueño: <span>{citas.nomDueno}</span></p>
       <p>Fecha: <span>{citas.fecha}</span></p>
       <p>Hora: <span>{citas.hora}</span></p>
       <p>Sintomas: <span>{citas.sintomas}</span></p>
       <Button variant="primary" type="submit" className="w-100 boton2">
        ELIMINAR x
      </Button>
      </Card.Body>
    </Card>
  );
}

export default Cardd;