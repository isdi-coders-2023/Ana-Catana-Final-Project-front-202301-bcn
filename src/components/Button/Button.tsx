import ButtonStyled from "./ButtonStyled";
import "@fontsource/roboto";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
