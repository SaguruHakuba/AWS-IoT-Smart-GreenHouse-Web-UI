import React, { useState } from "react";

import Sidebar from "../components/Sidebar";

import { spacing } from "@material-ui/system";
import {
  Hidden,
  CssBaseline,
  Paper as MuiPaper,
  withWidth
} from "@material-ui/core";

import { isWidthUp } from "@material-ui/core/withWidth";

const Dashboard = ({children, routes, width}) => {

    return (
          <Sidebar
          />

    );
}

export default withWidth()(Dashboard);