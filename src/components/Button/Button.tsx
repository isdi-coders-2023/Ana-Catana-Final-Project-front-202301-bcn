import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  onClickAction?: () => void;
  type: "submit" | "button";
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
