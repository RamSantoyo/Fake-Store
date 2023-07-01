import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    i{
        font-size: 5rem;
    }
`;

const Return = styled.button`
    border: none;
    background-color: #ff8395;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        trnsition: all .3s ease-in-out;
        scale: 1.1;
    }
`;

const Fail = () => {
    return (
        <Content>
            <h1>Oops algo salio mal!</h1>
            <p> No encontramos nada por aqui, agregue productos y vuelva a intentarlo</p>
            <i className="fa-solid fa-face-dizzy"></i>
            <Link to="/"><Return>Volver a la tienda</Return></Link>
        </Content>
    )
}

export default Fail