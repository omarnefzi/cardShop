import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {  useSelector } from 'react-redux';
import CustomCard from '../components/Card';

const Cart = ({id,quantity}) => {
  const cartItems = useSelector((state) => state.products.products.filter((item) => item.quantity > 0));

  return (
    <div>
      <h2>Cart</h2>
    <Row className='g-5'>
      
        {cartItems.map((item) => (
            <Col key={item.id}>
           <CustomCard  {...item} />
           
            
           </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cart;