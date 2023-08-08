import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import styled from 'styled-components';

const Spanheart = styled.span`
    position: relative;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    padding: .2rem .5rem;
    font-size: .8rem;
    top: -1rem;
    left: -.1rem;
`;

const Hearts = styled.i`
    color: #000;
`;
    

const Heart = () => {
    const likes = useSelector(state => state.Heart.value);
    return(
        <div>
            <Link to="/hearts">
                <Hearts className="fa-solid fa-heart"></Hearts>
            </Link>
            <Spanheart>{likes.length}</Spanheart>           
        </div>
    )
}

export default Heart;