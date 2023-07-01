//leer parametro de la url
import React from 'react'
import Star from '../Components/Star'
import Acciones from '../Components/Acciones';
import { useLoaderData } from "react-router-dom";
import { useSelector } from 'react-redux';
import Check from '../Components/Check';
import styled from 'styled-components'

const Contenedor = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 2rem;
`;

const Cntdesc = styled.div`
    padding: 2rem;
    h2{
        font-size: 1.5rem;
    }
`;

const Cntimg = styled.div`
    object-fit: cover;
    padding: 7rem;
    border-radius: 0.5rem;    
`;

const P = styled.p`
    font-size: 1.2rem;
`;

const Description = styled.p`
    font-size: .9rem;
`;

const CntAcciones = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const Producto = () => {

    const selector = useSelector((state) => state.Modalcheck.value);

    const { data } = useLoaderData();

    return (
        <div>
            {selector ? <Check /> : null}
           {
                data ? (
                    <Contenedor>
                        <Cntimg>                                               
                            <img src={data.image} alt={data.title} />
                        </Cntimg> 
                        <Cntdesc>
                            <h2>{data.title}</h2>
                            <Description>{data.description}</Description>
                            <P><strong>Categoria: </strong>{data.category}</P>
                            <P><strong>Precio: </strong>${data.price}</P>
                            <CntAcciones >
                                <Star/>
                                <Acciones 
                                    id={data.id} 
                                    imagen={data.image} 
                                    nombre={data.title} 
                                    categoria={data.category} 
                                    precio={data.price}
                                />
                            </CntAcciones>
                        </Cntdesc>
                    </Contenedor>
                ) : null
           }
        </div>
    )
}

export default Producto