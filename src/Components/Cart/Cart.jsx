import React from 'react'
import './Cart.css'
import { Container,Button } from "react-bootstrap";
export default function Cart(props) {
    let cart =props.cart
   let tottal =cart.reduce((val,value)=>val+value.price,0)
    return (
        <div className="cart ">
            <Container >
            <h4>Your Summery</h4>
            <hr />
            <h5>Total Enroll:{cart.length}</h5>
            <h5>Price:${tottal}</h5>
            <Button variant="warning">Enroll Now</Button>
            </Container>
            
        </div>
    )
}
