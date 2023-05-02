import  React from 'react'
import apis from '../../data/api'
import Carddd from './Carddd'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Containersyst = () => {
 
  return (
    <div>
<Container>
    <Row>
        {apis.map(({link, fullName ,bio ,profession})=>
        <Col>
        <Carddd
        link={ link}
        fullName={fullName}
        bio={bio}
        profession={profession}
        
        />
       </Col>
      )}
    </Row>


</Container>

    </div>
  )
}

export default Containersyst