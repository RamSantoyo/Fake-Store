import styled from "styled-components";
import StyledLoader from "./StyledLoader";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Api from "../Apis/Api";

const Contenedorcard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const Tarjeta = styled.div`
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

const Acciones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-weight: var(--grande);
    }
    i{
        transition: all .3s ease-in-out;
        font-size: 1.3rem;
    }
    i:hover{
        transition: all .3s ease-in-out;
        scale: 1.3;
        cursor: pointer;
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
                <React.Fragment>
                    <StyledLoader />
                    <StyledLoader />
                    <StyledLoader />
                </React.Fragment>
            ) : (                                  
            productos.map((producto) => (
                <Tarjeta key={producto.id}>
                    <img src={producto.image} alt={producto.title} />
                    <Contenidocard>
                        <h3>{producto.title.substring(0, 10)}</h3>
                        <p>{producto.category}</p>
                        <Acciones>
                            <p>${producto.price}</p>
                            <i className="fa-solid fa-heart"></i>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Acciones>
                    </Contenidocard>
                </Tarjeta>
          )))}
            </Contenedorcard>
        </div>
    );
};

export default Productos;
