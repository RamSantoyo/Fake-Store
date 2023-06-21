import styled from "styled-components";

const Cntstar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .8rem;
    gap: .1rem;
    i{
        color: #f2c500;
    }
`;

const Star = () => {
    
    return (
        <Cntstar>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </Cntstar>
    );
};

export default Star;