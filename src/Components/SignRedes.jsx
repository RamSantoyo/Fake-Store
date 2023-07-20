import styled from "styled-components";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
const SignRedesStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    font-size: 1rem;
    p{
        margin: 0;
        padding: 0;
        text-decoration: underline;
    }    
`;

const Redes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;


const SignRedes = () => {
    return (
        <SignRedesStyled>
            <p><strong>Login with social networks</strong></p>
            <Redes>
                <img src={google} alt="google" width="30px" height="30px"/>
                <img src={facebook} alt="facebook" width="30px" height="30px"/>
                <img src={twitter} alt="twitter" width="30px" height="30px"/>
            </Redes>
        </SignRedesStyled>
    );
}

export default SignRedes;