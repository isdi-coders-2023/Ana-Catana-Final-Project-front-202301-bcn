import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  input::placeholder {
    color: ${(props) => props.theme.color.inputPlaceholder};
  }

  .login-form {
    &__field {
      color: ${(props) => props.theme.color.inputPlaceholder};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 350px;
      height: 50px;
      margin-top: 9px;
      border-radius: 10px;
      padding-left: 10px;
      border: 2px solid ${(props) => props.theme.color.inputPlaceholder};

      input {
        width: 100%;
        display: flex;
        align-items: center;
      }
    }

    &__title {
      font-size: ${(props) => props.theme.fontSizes.titleSize};
      color: ${(props) => props.theme.color.titleColor};
      font-weight: ${(props) => props.theme.fontStyles.primaryWeight};
      margin-bottom: 10px;
    }

    &__register {
      margin-top: -12px;
      &-link {
        color: ${(props) => props.theme.color.primary};
      }
    }

    &__error {
      color: ${(props) => props.theme.color.errorColor};
    }

    &--hidden {
      opacity: 0;
    }
  }
`;

export default LoginFormStyled;
