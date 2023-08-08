import styled from "styled-components";
import {ActionUser} from '../Store/User'
import { useDispatch } from 'react-redux';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25);
    position: absolute;
    margin-top: 15%;
    margin-left: 14%;
    p{
        cursor: pointer;
        margin: 0;
        padding: 0;
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