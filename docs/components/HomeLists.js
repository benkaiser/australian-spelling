import React from "../_snowpack/pkg/react.js";
import {Card, CardActionArea, Typography} from "../_snowpack/pkg/@material-ui/core.js";
export default class HomeLists extends React.Component {
  render() {
    if (!this.items.length) {
      return null;
    }
    return /* @__PURE__ */ React.createElement("div", {
      className: "homeListsSection"
    }, /* @__PURE__ */ React.createElement(Typography, {
      variant: "h5"
    }, this.name()), this.items.map((item) => /* @__PURE__ */ React.createElement(Card, {
      style: {marginTop: "8px"}
    }, /* @__PURE__ */ React.createElement(CardActionArea, {
      style: {padding: "12px"}
    }, /* @__PURE__ */ React.createElement(Typography, {
      variant: "subtitle2"
    }, item.title)))));
  }
}
