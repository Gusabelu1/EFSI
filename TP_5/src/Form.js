import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Formm({setCitas}) {
  const [nomMascota, setNomMascota] = useState('');
  const [nomDueno, setNomDueno] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCitas(prev => [...prev, {
      nomMascota,
      nomDueno,
      fecha,
      hora,
      sintomas
    }])
    setNomMascota("");
    setNomDueno("");
    setFecha("");
    setHora("");
    setSintomas("");
  }

  return (
    <Form onSubmit={handleSubmit()}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre Mascota</Form.Label>
        <Form.Control type="text" placeholder="Nombre Mascota" onChange={e => setNomMascota(e.target.value)} value={nomMascota}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre Dueño</Form.Label>
        <Form.Control type="text" placeholder="Nombre Dueño" onChange={e => setNomDueno(e.target.value)} value={nomDueno}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" onChange={e => setFecha(e.target.value)} value={fecha}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTime">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="time" onChange={e => setHora(e.target.value)} value={hora}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Text">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control
          as="textarea"
          style={{ height: '65px' }}
          onChange={e => setSintomas(e.target.value)} value={sintomas}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 boton1">
        AGREGAR CITA
      </Button>
    </Form>
  );
}

export default Formm;