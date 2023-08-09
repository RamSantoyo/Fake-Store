import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
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
    @media (max-width: 768px) {
        position: absolute;
        top: 11%;
        left: 30%;
    }
`;

const Car = styled.i`
    color: #000;
`;
    

const Carrito = () => {

    const products = useSelector(state => state.Car.value);

    return(
        <div>
            <Link to="/carrito">
                <Car className="fa-solid fa-cart-shopping"></Car>
            </Link>
            <Span>{products.length}</Span>
        </div>
    )
}

export default Carrito;