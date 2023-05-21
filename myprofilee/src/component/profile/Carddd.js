// Import necessary dependencies from react and react-bootstrap
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Import API data from a specific location
import apis from '../../data/api';

// Define a functional component called Carddd
const Carddd = (prpos) => {
    // Destructure the props object to get specific values
    const link = prpos.link;
    const fullName = prpos.fullName;
    const bio = prpos.bio;
    const profession = prpos.profession;

    // Render the component
    return (
        <div>
            {/* Render a Bootstrap Card component */}
            <Card style={{ width: '18rem' }}>
                {/* Render an image within the Card */}
                <Card.Img variant="top" src={link} />
                <Card.Body>
                    {/* Render the full name within the Card Title */}
                    <Card.Title>{fullName}</Card.Title>
                    <Card.Text>
                        {/* Render the bio and profession within the Card Text */}
                        {bio} {profession}
                    </Card.Text>
                    {/* Render a Bootstrap Button within the Card Body */}
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

// Export the Carddd component as the default export
export default Carddd;
