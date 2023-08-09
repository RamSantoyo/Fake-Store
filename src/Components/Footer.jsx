import React from "react";
import styled from "styled-components";
import Logotipo from "../assets/logo.png"

const FooterStyle = styled.div`
    background-color: var(--primary);
    margin-top: 5rem;
    color: #fff;
    padding: 2rem 0;
`;

const Imagen = styled.img`
    filter: brightness(300%);
    width: 70%;
`;

const Redes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    i{
        font-size: 2rem;
    }
`;

const Info = styled.div`
    p{
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        p{
            padding: 0 1rem;
            text-align: center;
        }
`;

const ContainFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`;

const Derechos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
    p{
        font-size: 1rem;
        margin: 0;
    }
`;

const Footer = () => {
    return (
        <FooterStyle>
            <div className="container">
                <ContainFooter>
                    <Imagen src={Logotipo} alt="Logo"/>
                    <Redes>
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-solid fa-briefcase"></i>
                    </Redes>
                    <Info>
                        <p>
                            Este proyecto fue realizado con fines educativos, como parte de aprendizaje con React.  Puedes consultar el código fuente en mi repositorio de GitHub.
                        </p>    
                    </Info>
                </ContainFooter>
                <Derechos>              
                    <p>Desarrollado por: <strong>Ramsess Santoyo</strong></p>
                    <p>© 2023 - Todos los derechos reservados</p>
                </Derechos>  
            </div>            
        </FooterStyle >
    );
};

export default Footer;