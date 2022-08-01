import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Formm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre Mascota</Form.Label>
        <Form.Control type="text" placeholder="Nombre Mascota" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre Dueño</Form.Label>
        <Form.Control type="text" placeholder="Nombre Dueño" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTime">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="time"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Text">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control
          as="textarea"
          style={{ height: '65px' }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 boton1">
        AGREGAR CITA
      </Button>
    </Form>
  );
}

export default Formm;