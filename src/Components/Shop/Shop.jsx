import React from 'react'
import {Container,Col,Row,Card,Button } from "react-bootstrap";

export default function Shop(props) {
   const {name,img,athore,price}=props.course
     console.log(props.course.img);
    return (
        <Container >
  <Row >
   <Col >
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    Author: {athore}
    </Card.Text>
    <Card.Text>
      ${price}
    </Card.Text>
    <Button variant="warning" onClick={()=>props.handelClick(props.course)}>Add To Cart</Button>
  </Card.Body>
</Card>
 </Col>
  </Row>
  <br />
</Container>
     
    )
}
   



