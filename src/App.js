import React from "react";
import "./App.css";
import { Element } from "react-scroll";

import { StylesProvider } from "@material-ui/styles";
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline
} from "@material-ui/core";
import NavBar from "./components/nav/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Relationships from "./components/relationships/Relationships";
import Requirements from "./components/requirements/Requirements";
import Users from "./components/users/Users";
import SignUp from "./components/signup/SignUp";
import Footer from "./components/footer/Footer";

import store from "./store";
import { Provider } from "react-redux";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10
  },
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#ed4811"
    }
  },
  spacing: 12

  // overrides: {
  //   MuiContainer: {
  //     root: {
  //       padding: 20
  //     }
  //   }
  // }
});

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <Header />
          <Element name="About me">
            <About />
          </Element>
          <Element name="Relationships">
            <Relationships />
          </Element>
          <Element name="Requirements">
            <Requirements />
          </Element>
          <Element name="Users">
            <Users />
          </Element>
          <Element name="Sign up">
            <SignUp />
          </Element>

          <Footer />
        </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  );
}

export default App;
