import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <div>
      <Card style={{width: "20rem"}} className= "p-1">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button>Learn More</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

export default ReactBootstrap

