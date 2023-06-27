import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Carrito = () => {

    const products = useSelector(state => state.Car.value);
    return (
        <div>
            <h1>Carrito</h1>
            {
                products.map((item, index) => (
                    <div key={index}>
                        <h2>{item.nombre}</h2>
                        <p>{item.categoria}</p>
                        <img src={item.imagen} alt={item.nombre} />
                        <p>{item.precio}</p>
                        <p>{item.cantidad}</p>
                    </div>
                ))                
            }
        </div>
    );
}

export default Carrito;
