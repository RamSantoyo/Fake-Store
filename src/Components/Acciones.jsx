import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { addCar } from '../Store/Car.jsx';
import { addHeart } from '../Store/Heart.jsx';
import { Edit } from '../Store/Modalcheck.jsx';

const Btnlike = styled.button`
    transition: all .3s ease;
    cursor: pointer;
    background-color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    &:hover{
        transition: all .3s ease;
        scale: 1.2;
    }
`;

const BtnAgregar = styled.button`
    background-color: #000;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transition: all .3s ease;
        background-color: #333;
        scale: 1.1;
    }
`;

const ContentBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;


const Acciones = ({ id, imagen, nombre, categoria, precio }) => {

    const dispatch = useDispatch();
    const logeo = useSelector((state) => state.User.value);

    const actioncar = () => {
        dispatch(addCar({ id, imagen, nombre, categoria, precio, cantidad: 1 }));

        dispatch(Edit(true));
        setTimeout(() => {
            dispatch(Edit(false));
        }, 2000);

    }

    const actionheart = () => {
        if (!logeo) {
            alert("You must be logged in to add to favorites");                        
        }else{
            dispatch(addHeart({ id, imagen, nombre, categoria, precio, cantidad: 1 }));

            dispatch(Edit(true));
            setTimeout(() => {
                dispatch(Edit(false));
            }, 2000);
        }        
    }

    return (
        <ContentBtn>
            <Btnlike onClick={ actionheart }>
                <i className="fa-solid fa-heart"></i>
            </Btnlike>
            <BtnAgregar onClick={ actioncar }>
                <i className="fa-solid fa-cart-plus"></i> Agregar al carrito
            </BtnAgregar>
        </ContentBtn>
    );
};

export default Acciones;