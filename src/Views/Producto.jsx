//leer parametro de la url
import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from "react-router-dom";

const Producto = () => {

    const { data } = useLoaderData();
    const { id } = useParams();

    console.log(data)

    return (
        <div>
           {
                data ? (
                    <React.Fragment>
                        <h2>{data.title}</h2>
                        <img src={data.image} alt={data.title} />
                        <p>{data.description}</p>
                        <p><strong>Categoria: </strong>{data.category}</p>
                        <p><strong>Precio: </strong>${data.price}</p>
                    </React.Fragment>
                ) : null
           }
        </div>
    )
}

export default Producto