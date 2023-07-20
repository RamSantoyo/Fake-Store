import "../index.css"
import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import Login from "../Components/Login";
import Footer from "../Components/Footer";

const App = () => {

    const login = useSelector(state => state.Login.value);
    return (
        <>
        <Nav/>        
        <div className="container">
            {login === true ? <Login/> : null} 
            <Outlet/>
        </div>
        <Footer/>
        </>
    );
}

export default App;
