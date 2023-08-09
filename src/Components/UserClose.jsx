import styled from "styled-components";
import {ActionUser} from '../Store/User'
import { useDispatch } from 'react-redux';

const Card = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;
    width: 15%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25);
    position: absolute;
    p{
        cursor: pointer;
        margin: 0;
        padding: 0;
    }
    margin-left: 77%;
    margin-top: 7%;
    @media (max-width: 768px) {
        background-color: #000;
        width: 50%;
        height: 20%;
        margin-left: 20%;
        margin-top: 40%;
    }
`;

const BtnClose = styled.button`
    background-color: var(--primary);
    color: #fff;
    border: none;
    border-radius: .5rem;
    padding: .5rem;
    font-size: 1.2rem;
    font-weight: var(--grande);
    cursor: pointer;
    width: 100%;
`;



const UserClose = ({ Modal, setModal }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        setModal(!Modal);
      };
    return (
        <Card>
            <p>My Account</p>
            <p>Configurations</p>
            <BtnClose onClick={() => {
                handleClick();
                dispatch(ActionUser(false));                
            }}>Close Session</BtnClose>
        </Card>
    )
}

export default UserClose;