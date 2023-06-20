import "../index.css"
import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom";
import Nav from "../Components/Nav";


const App = () => {
    return (
        <>
        <Nav/>        
        <div className="container">            
            <Outlet/>
        </div>
        </>
    );
}

export default App;
