import styled from 'styled-components';
import Imgbanner from '../assets/banner.jpg';

const Content = styled.div`
    display: flex;
    align-items: center;   
`;

const Titulo1 = styled.h1`
    font-weight: var(--grande);
`;

const Texto = styled.p`
    background-color: var(--primary);
    font-weight: var(--grande);
    padding: .6rem;
`;

const Parrafo = styled.p`
    font-weight: var(--regular);
    font-size: 1rem;
`;


const Banner = () => {
    return (
        <Content>
            <img src={Imgbanner} alt="banner" />            
            <div>
                <Titulo1>¡Únete a la moda!</Titulo1>
                <Texto>Encuentra tendencias increíbles en nuestra tienda online.</Texto>
                <Parrafo >Descubre marcas exclusivas de ropa, zapatos y accesorios para todos. ¡Compra ahora y recibe en tu puerta!</Parrafo >
            </div>
        </Content>
    );
}

export default Banner;