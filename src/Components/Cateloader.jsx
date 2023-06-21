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
  height: 15px;
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

const Line = styled.div`
  position: absolute;
  height: 10px;
  background-color: #cacaca;
`;

const Line1 = styled(Line)`
  width: 100%;
`;

const Cateloader = () => {
  return (
    <Loader>
      <Wrapper>
        <Line1 />
      </Wrapper>
    </Loader>
  );
};

export default Cateloader;
