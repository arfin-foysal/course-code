import React from 'react'
import {Container,Col,Row,Card,Button } from "react-bootstrap";

export default function Shop(props) {
   const {name,img,athore}=props.course
     console.log(props.course.img);
    return (
        <Container >
  <Row >
   
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {athore}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  </Row>
 
</Container>
     
    )
}
   



