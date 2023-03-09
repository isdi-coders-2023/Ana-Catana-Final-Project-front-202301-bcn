import { Provider } from "react-redux";
import { store } from "../store";

export interface WrapperProp {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProp): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);
