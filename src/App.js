
import React from 'react';
import theme from './theme';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global-styles';
import { AppContainer } from './containers';

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <React.Fragment>
          <BrowserRouter basename={'/'}>
            <Route
              path={'/'}
              component={(props) => <AppContainer {...props} />}
            />
            <Redirect exact from="*" to={'/'} />
          </BrowserRouter>
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

