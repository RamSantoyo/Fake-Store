import { Link, Outlet } from "react-router-dom";
import styled from 'styled-components';

const App = () => {
    return (
        <div>
            <h1>Appi</h1>
            <section>
                <Outlet/>
            </section>
        </div>
    );
}

export default App;
