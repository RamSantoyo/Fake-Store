import styled from "styled-components"
import Logotipo from "../assets/logo.png"
import { Link } from "react-router-dom"
import Carrito from "./Carrito"
import { useDispatch } from "react-redux"
import { Actionlogin} from '../Store/Loginstate'

const Navegation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;
    background-color: #fff;
    color: #000;`;

const Contenido = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    `;

const Space = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: #000;
`;

const Logo = styled.img`
    width: 30%;
`;

const Logeo = styled.a`
    cursor: pointer;
`;


const Nav = () => {
    const dispatch = useDispatch();
    return (
        <Navegation>
            <Space>
                <Logo src={Logotipo} alt="Logo"/>
                <Space>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </Space>
            </Space>
                <Contenido>
                    <i className="fa-solid fa-heart"></i>                    
                    <Carrito />                         
                    <Logeo onClick={() => dispatch(Actionlogin())}><i className="fa-solid fa-circle-user"></i> Login</Logeo>
                </Contenido> 
        </Navegation>
    )
}

export default Nav;