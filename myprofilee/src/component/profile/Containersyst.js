// Import necessary dependencies from React and react-bootstrap
import React from 'react';
import apis from '../../data/api';
import Carddd from './Carddd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Define a functional component called Containersyst
const Containersyst = () => {

  // Render the component
  return (
    <div>
      {/* Render a Bootstrap Container */}
      <Container>
        {/* Render a Bootstrap Row */}
        <Row>
          {/* Iterate over the array of API data */}
          {apis.map(({ link, fullName, bio, profession }) => (
            // Render a Bootstrap Col for each item in the array
            <Col>
              {/* Render the Carddd component and pass props */}
              <Carddd
                link={link}
                fullName={fullName}
                bio={bio}
                profession={profession}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

// Export the Containersyst component as the default export
export default Containersyst;
