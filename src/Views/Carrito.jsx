import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar, sumCar, resCar } from '../Store/Car.jsx';
import { useEffect, useState } from "react";
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
            padding-left: 0;
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
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

const Cnt = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
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

const Cant = styled.p`
    border: none;
    background-color: #f5f5f5;
    cursor: pointer;
    padding: .6rem;
    font-size: 1rem;
    border-radius: 4px;
    width: 2rem;
    text-align: center;
`;

const Editcnt = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Btncant = styled.i`
    transition: all .3s ease-in-out;;
    cursor: pointer;
    &:hover{
        trnsition: all .3s ease-in-out;
        scale: 1.1;
    }
`;

const BtnComprar = styled.button`
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

const Divcompra = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

const Compra = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;


const Carrito = () => {
    const [Total, setTotal] = useState(0);    

    const products = useSelector(state => state.Car.value);    
    const dispatch = useDispatch();

    if(products){
        useEffect(() => {
            let total = 0;
            products.map((item) => {
                total += item.precio * item.cantidad;
            });
            setTotal(total);
        }, [products]);
    }

    if(products.length === 0){
        return <Fail />
    }
    
    return (
        <div>
            <h1>Carrito</h1>
                {                
                    products.map((item, index) => (
                        <Card key={index}>
                            <img src={item.imagen} alt={item.nombre} />
                            <ContenidoCard>
                                <h2>{item.nombre}</h2>
                                <p>{item.categoria}</p>
                                <Cnt>                            
                                    <p><strong>$</strong> {item.precio}</p>
                                    <p><strong>Cantidad:</strong> {item.cantidad}</p>
                                    <p><strong>Total:</strong> 
                                        ${Math.round(item.precio * item.cantidad * 100) / 100}
                                    </p>
                                </Cnt>
                            </ContenidoCard>
                            <Acciones>
                                <Borrar
                                    className="fa-solid fa-trash" onClick={() => dispatch(removeCar(item.id))}>
                                </Borrar>
                                <Editcnt>
                                    <Cant>{item.cantidad}</Cant> 
                                    <Btncant 
                                    className="fa-solid fa-minus" onClick={() => dispatch(resCar(item.id))}>                                        
                                    </Btncant>
                                    <Btncant className="fa-solid fa-plus" 
                                    onClick={() => dispatch(sumCar(item.id))}>
                                    </Btncant>                                                               
                                </Editcnt>                                
                            </Acciones>                            
                        </Card>
                    ))                                
                }
                <Divcompra>
                    <Compra>
                        <h2>Total: ${Math.round(Total * 100) / 100}</h2>
                        <BtnComprar>Pagar ahora</BtnComprar>
                    </Compra>
                </Divcompra>
        </div>
    );
}

export default Carrito;
