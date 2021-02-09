import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {AppBar, Container, createMuiTheme, Fab, ThemeProvider, Toolbar, Typography} from "./_snowpack/pkg/@material-ui/core.js";
import AddIcon from "./_snowpack/pkg/@material-ui/icons/Add.js";
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
    }, /* @__PURE__ */ React.createElement(AppBar, {
      position: "static"
    }, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(Container, {
      fixed: true
    }, /* @__PURE__ */ React.createElement(Typography, {
      variant: "h6",
      color: "textSecondary"
    }, "Australian Spelling")))), /* @__PURE__ */ React.createElement(Container, {
      fixed: true
    }, /* @__PURE__ */ React.createElement("div", {
      className: "containerContent"
    }, /* @__PURE__ */ React.createElement(Fab, {
      color: "secondary",
      variant: "extended",
      style: {width: "100%"}
    }, /* @__PURE__ */ React.createElement(AddIcon, null), "Create List")), /* @__PURE__ */ React.createElement("div", null, "Testing github action run")));
  }
}
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("app"));
