import React from "./_snowpack/pkg/react.js";
import Layout from "./Layout.js";
import {Fab} from "./_snowpack/pkg/@material-ui/core.js";
import AddIcon from "./_snowpack/pkg/@material-ui/icons/Add.js";
import CurriculumLists from "./components/CurriculumLists.js";
export default class App extends Layout {
  renderInternal() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Fab, {
      color: "secondary",
      variant: "extended",
      style: {width: "100%"}
    }, /* @__PURE__ */ React.createElement(AddIcon, null), "Create List"), /* @__PURE__ */ React.createElement(CurriculumLists, null));
  }
}
