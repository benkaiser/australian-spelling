import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "./_snowpack/pkg/react-router-dom.js";
import {createMuiTheme, ThemeProvider} from "./_snowpack/pkg/@material-ui/core.js";
import Home from "./Home.js";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26C6DA",
      light: "#6ff9ff",
      dark: "#0095a8",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#FF4081",
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#FFFFFF"
    },
    text: {
      secondary: "#FFFFFF"
    }
  }
});
export default class App extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement(ThemeProvider, {
      theme
    }, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
      path: "/",
      component: Home
    }))));
  }
}
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("app"));
