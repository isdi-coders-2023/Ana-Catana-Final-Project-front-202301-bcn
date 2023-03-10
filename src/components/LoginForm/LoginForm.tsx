import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";
import { ReactComponent as EmailIcon } from "../../assets/icons/email-icon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/icons/component.svg";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="login-form">
      <h2 className="login-form__title">Login</h2>
      <label htmlFor="email" className="login-form__field">
        <i className="icon">{<EmailIcon />}</i>
        <input
          type={"email"}
          placeholder="Email"
          className="login-form__email"
          autoFocus
          required
        />
      </label>
      <label htmlFor="password" className="login-form__field">
        <i className="icon">{<PasswordIcon />}</i>
        <input
          type={"password"}
          placeholder="Password"
          className="login-form__password"
          required
        />
      </label>
      <span className="login-form__error login-form__error--hidden"></span>
      <Button text={"Login"} type={"submit"} />
    </LoginFormStyled>
  );
};
export default LoginForm;
