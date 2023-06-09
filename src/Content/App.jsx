import "../index.css"
import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const App = () => {
    return (
        <>
        <Nav/>        
        <div className="container">            
            <Outlet/>
        </div>
        <Footer/>
        </>
    );
}

export default App;
