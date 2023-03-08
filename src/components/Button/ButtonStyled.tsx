import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 350px;
  height: 60px;
  font-family: ${(props) => props.theme.fontStyles.primaryStyle};
  font-size: ${(props) => props.theme.fontSizes.buttonTextSize};
  font-weight: ${(props) => props.theme.fontStyles.primaryWeight};
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.textColor};
  border-radius: 10px;
  cursor: pointer;
`;

export default ButtonStyled;
