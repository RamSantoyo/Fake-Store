import styled from "styled-components"
import Logotipo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Navegation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    background-color: #000;
    color: #fff;`;

const Contenido = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    `;

const Space = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const Logo = styled.img`
    width: 30%;
`;

const Nav = () => {
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
                    <i class="fa-solid fa-heart"></i>                    
                    <i class="fa-solid fa-cart-shopping"></i>       
                    <a><i class="fa-solid fa-circle-user"></i> Login</a>
                </Contenido> 
        </Navegation>
    )
}

export default Nav;