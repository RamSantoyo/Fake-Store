import "../index.css"
import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Categorias from "../Components/Categorias";

const App = () => {
    return (
        <>
        <Nav/>        
        <div className="container">            
            <Banner/>
            <Categorias/>
            <section>
                <Outlet/>
            </section>
        </div>
        </>
    );
}

export default App;
