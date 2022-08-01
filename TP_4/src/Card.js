import React from 'react';
import Card from 'react-bootstrap/Card';
import inscipcion from "./inscipcion.jpeg";

function Cards(){
    return ( 
        <Card>            
            <Card.Body className='box-shadow'>
                <Card.Title><span className='cardsTitle'>Inscripción ciclo lectivo 2021 - Nivel Secundario</span></Card.Title>
                <div className='border-top mt-3 mb-3'></div>
                <Card.Img variant="top" src={inscipcion} />
                <Card.Text className='mt-3'>
                Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
                </Card.Text>
            </Card.Body>
        </Card>             
     );
}
 
export default Cards;