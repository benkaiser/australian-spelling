import React from "./_snowpack/pkg/react.js";
import {AppBar, Container, Toolbar, Typography} from "./_snowpack/pkg/@material-ui/core.js";
export default class Layout extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AppBar, {
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
    }, this.renderInternal())));
  }
  renderInternal() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
}
