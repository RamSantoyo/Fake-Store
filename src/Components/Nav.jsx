import styled from "styled-components"
import Logotipo from "../assets/logo.png"
import { Link } from "react-router-dom"
import Carrito from "./Carrito"
import Heart from "./Heart"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react';
import UserClose from "./UserClose";
import { Actionlogin } from '../Store/Loginstate'

const Navegation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;
    background-color: #fff;
    color: #000;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `;

const Contenido = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    @media (max-width: 768px) {
        margin-top: 1rem;
        gap: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    `;

const Space = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: #000;
`;

const Logo = styled.img`
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Logeo = styled.a`
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
`;


const Nav = () => {
    const dispatch = useDispatch();
    const logeo = useSelector((state) => state.User.value);

    const [Modal , setModal] = useState(false);

    const handleClick = () => {
        setModal(!Modal);
      };

    return (
        <Navegation>
            <Space>
                <Link to="/">
                    <Logo src={Logotipo} alt="Logo"/>
                </Link>
            </Space>
                <Contenido>
                    {
                        logeo ? <Heart/> : null
                    }                                        
                    <Carrito />
                    {logeo ? 
                    <>
                        <Logeo onClick={() => handleClick()}><i className="fa-solid fa-circle-user"></i> Welcome</Logeo>
                        {
                            Modal ? <UserClose Modal={Modal} setModal={setModal}/> : null
                        }
                    </>
                    : 
                    <Logeo onClick={() => dispatch(Actionlogin())}><i className="fa-solid fa-circle-user"></i> Login</Logeo>
                    }
                </Contenido> 
        </Navegation>
    )
}

export default Nav;