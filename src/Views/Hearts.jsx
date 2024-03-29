import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeHeart } from '../Store/Heart.jsx';
import { Link } from 'react-router-dom';
import Fail from '../Components/Fail.jsx';
import styled from 'styled-components';

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 1rem;
    margin-bottom: 1rem;    
    img{
        width: 100px;
        padding-left: 4rem;
    }
    @media (max-width: 768px) {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        img{
            width: 50%;
        }
    }
`;

const ContenidoCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2{
        font-size: 1.5rem;
        margin: 0;
    }
    p{
        margin: 0;
        font-size: 1.2rem;
    }
`;

const Cnt = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Acciones = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    i{
        font-size: 1.1rem;
    }
`;

const Borrar = styled.i`
    transition: all .3s ease-in-out;
    color: white;
    background-color: #BA0000;
    border-radius: 50%;
    padding: .6rem;
    cursor: pointer;
    &:hover{
        trnsition: all .3s ease-in-out;
        scale: 1.1;
    }
`;


const Hearts = () => {   

    const Ilikeds = useSelector(state => state.Heart.value);    
    const dispatch = useDispatch();

    const stopPropagation = (e) => {
        e.stopPropagation();
    };


    if(Ilikeds.length === 0){
        return <Fail />
    }
    
    return (
        <div>
            <h1>Favoritos <i className="fa-solid fa-heart"></i></h1>
                {                
                    Ilikeds.map((item, index) => (                    
                        <Card key={index}>
                            <Link to={`/producto/${item.id}`} onClick={stopPropagation}>
                            <img src={item.imagen} alt={item.nombre} />
                            </Link>                            
                            <ContenidoCard>
                                <h2>{item.nombre}</h2>
                                <p>{item.categoria}</p>
                                <Cnt>                            
                                    <p><strong>Precio: </strong> {item.precio * item.cantidad}</p>
                                </Cnt>
                            </ContenidoCard>
                            <Acciones onClick={stopPropagation}>
                                <Borrar
                                    className="fa-solid fa-trash" onClick={() => dispatch(removeHeart(item.id))}
                                >
                                </Borrar>                              
                            </Acciones>                            
                        </Card>
                    ))                                
                }
        </div>
    );
}

export default Hearts;
