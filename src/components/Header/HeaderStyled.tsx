import styled from "styled-components";

const HeaderStyled = styled.h1`
  position: absolute;
  top: 90px;
  text-shadow: none;

  font-size: 2.3rem;
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSizes.logoSize};
  border: 2px solid ${(props) => props.theme.color.primary};
  padding: 15px 30px;
`;

export default HeaderStyled;
