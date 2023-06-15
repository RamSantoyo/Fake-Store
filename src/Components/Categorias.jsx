import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Api from "../Apis/Api";


const Contenedor = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5%;
    padding: 1rem 8rem;
`;

const Select = styled.button`
    background: #fff;
    border-radius: 2rem;
    padding: .5rem;

`;

const Categorias = () => {
    const { Categories } = Api;
    const [categorias, setCategorias] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const { data } = await Categories();
          setCategorias(data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchCategories();
    }, []);

    return (
        <div className="seccion">
            <h2>Categorias</h2>
            <Contenedor>
                {
                    categorias.map((categoria) => (
                        <Select key={categoria}>
                            <h3>{categoria}</h3>
                        </Select>
                    ))
                }
            </Contenedor>
        </div>
    );
}

export default Categorias;