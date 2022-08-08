import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Cardd({citas, setCitas}) {
  const borrarCita = (i) => {
    console.log("Cita borrada");
    const newCitas = [...citas];
    newCitas.splice(i, 1);
    setCitas(newCitas);
  }

  return (
    <div className='scroll'> {citas.map((cita, i) =>
      <Card className='mb-3 me-3' style={{ width: '32.5rem' }} key={i}>
        <Card.Body>
          <p><strong>Mascota: </strong><span>{cita.nomMascota}</span></p>
          <p><strong>Dueño: </strong><span>{cita.nomDueno}</span></p>
          <p><strong>Fecha: </strong><span>{cita.fecha}</span></p>
          <p><strong>Hora: </strong><span>{cita.hora}</span></p>
          <p><strong>Sintomas: </strong><span>{cita.sintomas}</span></p>
          <Button variant="primary" type="submit" className="w-100 boton2" onClick={() => {borrarCita(i)}}>
            ELIMINAR x
          </Button>
        </Card.Body>
      </Card>
    )}</div>
  );
}