import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;
    i{
        font-size: 5rem;
        color: #ffb9c4;
    }
`;

const Check = () => {
    return (
        <Modal>
            <h1>Agregaste el producto al carrito</h1>
            <i className="fa-solid fa-circle-check"></i>
        </Modal>
    )
}

export default Check