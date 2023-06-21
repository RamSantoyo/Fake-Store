import styled from "styled-components";
import StyledLoader from "./StyledLoader";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Star from "./Star";
import Api from "../Apis/Api";

const Contenedorcard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const Tarjeta = styled(Link)`
    transition: all .3s ease-in-out;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 1rem rgba(0,0,0,.2);
    padding: 2rem;
    &:hover{
        transition: all .3s ease-in-out;
        cursor: pointer;
        scale: 1.1;
    }
    img{
        width: 100%;
    }
`;

const Contenidocard = styled.div`
    font-size: 1rem;
    padding: 0 2rem;
`;

const Stars = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    p{
        font-weight: var(--grande);
    }
`;

const Productos = () => {
    const categoria = useSelector(state => state.Category.value);

    const { Allproducts, Category } = Api;
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [preload, setPreload] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            setPreload(true);
            const { data } = categoria.length === 0 ? await Allproducts() : await Category(categoria);
            setProductos(data);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchProducts();
    }, [categoria]);

    useEffect(() => {
        setPreload(false);
    }, [productos]);
      
    return (
        <div>
            <h2>Productos</h2>
            <Contenedorcard>
            {  loading || preload ? (
                Array.from({ length: 6 }).map((_, i) => (
                    <StyledLoader key={i} />
                  ))
            ) : (                                  
            productos.map((producto) => (                
                <Tarjeta key={producto.id} to={`/producto/${producto.id}`}>
                    <img src={producto.image} alt={producto.title} />
                    <Contenidocard>
                        <h3>{producto.title.substring(0, 10)}</h3>
                        <p>{producto.category}</p>
                        <Stars >
                            <p>${producto.price}</p>
                            <Star />
                        </Stars>
                    </Contenidocard>
                </Tarjeta>
          )))}
            </Contenedorcard>
        </div>
    );
};

export default Productos;
