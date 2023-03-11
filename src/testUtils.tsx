import { render, RenderOptions } from "@testing-library/react";
import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import { RootState, AppStore } from "./store";
import { userReducer } from "./store/user/userSlice";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import generalTheme from "./styles/generalTheme";
import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      user: { name: "", token: "", isLogged: false },
    },
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={generalTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
