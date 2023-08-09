import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, clearCategory } from '../Store/Category.jsx';
import Cateloader from "./Cateloader";
import styled from "styled-components";
import Api from "../Apis/Api";

const Contenedor = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 2%;
    padding: 2rem 6rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        padding: 2rem 2rem;
        gap: 1rem;
    }
`;

const Select = styled.button`
    transition: all .3s ease-in-out;
    background: #fff;
    border-radius: 1.8rem;
    padding: .2rem;
    &:hover {
        transition: all .3s ease-in-out;
        cursor: pointer;
        transform: scale(1.1);
    }
`;

const Categoria = styled.p`
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: var(--grande);
`;

const TitleCategory = styled.h2`
    text-transform: capitalize;
    font-weight: var(--grande);
    @media (max-width: 768px) {
        text-align: center;        
    }
`;

const Categorias = () => {
    const categoria = useSelector(state => state.Category.value);
    const dispatch = useDispatch();

    const { Categories } = Api;
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await Categories();
                setCategorias(data);
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false);
            }
        };        
        fetchCategories();
    }, []);
    
    return (
        <div className="seccion">
            <TitleCategory>Categorias</TitleCategory>
            <Contenedor>                
                { loading === true ? (
                    <React.Fragment>
                        <Cateloader />
                        <Cateloader />
                        <Cateloader />
                        <Cateloader />
                    </React.Fragment>
                ):(
                categorias.map((categoria) => (
                    <Select key={categoria} onClick={() => { dispatch(addCategory(categoria));}}>
                        <Categoria>{categoria}</Categoria>
                    </Select>                    
                )))
                }
                {
                    loading === false ? 
                    <Select onClick={() => dispatch(clearCategory())}>
                        <Categoria>Todas</Categoria>
                    </Select> : null
                }
                
            </Contenedor>
            {categoria.length > 0 ? <p><strong>Categoria: </strong>{categoria}</p> : null}
        </div>
    );
};

export default Categorias;
