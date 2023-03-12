import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";
import { ReactComponent as EmailIcon } from "../../assets/icons/email-icon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/icons/component.svg";
import { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../types/userTypes";
import { useAppSelector } from "../../store/hooks";

const LoginForm = (): JSX.Element => {
  const {
    feedback: { message },
  } = useAppSelector((state) => state.ui);

  const { loginUser } = useUser();

  const initialLoginState: UserCredentials = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialLoginState);

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    await loginUser(formData);
    setFormData(initialLoginState);
  };
  return (
    <LoginFormStyled onSubmit={handleSubmitForm} className="login-form">
      <h2 className="login-form__title">Login</h2>
      <label htmlFor="email" className="login-form__field">
        <i className="icon">{<EmailIcon />}</i>
        <input
          type={"email"}
          placeholder="Email"
          name="email"
          onChange={handleChangeEvent}
          value={formData.email}
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
          name="password"
          onChange={handleChangeEvent}
          value={formData.password}
          className="login-form__password"
          required
        />
      </label>
      <span className="login-form__error login-form__error--hidden">
        {message}
      </span>
      <Button text={"Login"} type={"submit"} />
    </LoginFormStyled>
  );
};
export default LoginForm;
