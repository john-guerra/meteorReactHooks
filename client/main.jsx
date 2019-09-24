import React from "react";
import { render } from "react-dom";


import { Meteor } from "meteor/meteor";

import App from "../imports/ui/App.jsx";

Meteor.startup(() => {
  render(<App></App>,
    document.getElementById("react-target"));
});
