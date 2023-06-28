import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Span = styled.span`
    position: relative;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    padding: .2rem .5rem;
    font-size: .8rem;
    top: -1rem;
    left: -.1rem;
`;

const Car = styled.i`
    color: #000;
`;
    

const Carrito = () => {

    const products = useSelector(state => state.Car.value);

    return(
        <div>
            <Car className="fa-solid fa-cart-shopping"></Car>
            <Span>{products.length}</Span>
        </div>
    )
}

export default Carrito;