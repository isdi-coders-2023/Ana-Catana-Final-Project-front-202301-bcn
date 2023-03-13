import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(200, 201, 203, 0.9);
  z-index: 10;

  .loader {
    width: 100px;
    height: 100px;
    border: 5px dotted ${(props) => props.theme.color.primary};
    border-radius: 50%;

    animation: rotation 2s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderStyled;
