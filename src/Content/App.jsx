import "../index.css"
import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Login from "../Components/Login";
import Footer from "../Components/Footer";

const App = () => {
    return (
        <>
        <Nav/>        
        <div className="container">
            <Login/>      
            <Outlet/>
        </div>
        <Footer/>
        </>
    );
}

export default App;
