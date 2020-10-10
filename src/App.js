import React from "react";
import theme from "./theme";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-styles";
import { AppContainer } from "./containers";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <React.Fragment>
          <BrowserRouter basename={"/"}>
            <Route
              path={"/"}
              component={(props) => <AppContainer {...props} />}
            />
            <Redirect exact from="*" to={"/"} />
          </BrowserRouter>
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
