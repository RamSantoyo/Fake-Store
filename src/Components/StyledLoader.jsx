import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
`;

const Loader = styled.div`
  position: relative;
  width: 90%;
  height: 130px;
  margin-bottom: 10px;
  border: 1px solid #d3d3d3;
  padding: 15px;
  background-color: #f5f5f5;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      110deg,
      rgba(230, 230, 227, 0) 0%,
      rgba(230, 230, 227, 0) 40%,
      rgba(230, 230, 227, 0.5) 50%,
      rgba(230, 230, 227, 0) 60%,
      rgba(230, 230, 227, 0) 100%
    );
    animation: ${gradientAnimation} 1.2s linear infinite;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #cacaca;
`;

const Line = styled.div`
  position: absolute;
  height: 10px;
  background-color: #cacaca;
`;

const Line1 = styled(Line)`
  top: 11px;
  left: 58px;
  width: 100px;
`;

const Line2 = styled(Line)`
  top: 34px;
  left: 58px;
  width: 150px;
`;

const Line3 = styled(Line)`
  top: 57px;
  left: 0;
  width: 100%;
`;

const Line4 = styled(Line)`
  top: 80px;
  left: 0;
  width: 92%;
`;

const StyledLoader = () => {
  return (
    <Loader>
      <Wrapper>
        <Circle />
        <Line1 />
        <Line2 />
        <Line3 />
        <Line4 />
      </Wrapper>
    </Loader>
  );
};

export default StyledLoader;
