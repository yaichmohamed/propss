import  React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apis from '../../data/api';
const Carddd = (prpos) => {
    const link=prpos.link;
    const  fullName=prpos. fullName;
    const bio=prpos.bio;
    const  profession= prpos. profession;
  return (
    <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Title>{fullName} </Card.Title>
        <Card.Text>
         {bio} {profession}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    

    </div>
  )
}

export default Carddd