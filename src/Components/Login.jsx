import styled from "styled-components";
import FormLogin from "./FormLogin";
import { useDispatch } from 'react-redux';
import { Actionlogin } from '../Store/Loginstate'

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    width: 100%; 
    height: 100%; 
    overflow: auto;  
    padding: 10px
`;

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 10%;
`;

const Login = () => {
    const dispatch = useDispatch();

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleModalClick = () => {
        dispatch(Actionlogin());
    };
    return (
        <Modal onClick={handleModalClick}>
            <ModalContent onClick={stopPropagation}>                
                <FormLogin/>
            </ModalContent>
        </Modal>
    );
}

export default Login;


