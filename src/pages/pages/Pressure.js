import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

import Helmet from 'react-helmet';
import DynamicLineChart from "../components/DynamicChart";

import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

function Pressure() {
  return (
    <React.Fragment>
      <Helmet title="Pressure" />
      <Typography variant="h3" gutterBottom display="inline">
        Pressure
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Typography>Pressure</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <DynamicLineChart title="Pressure sensor 301" uri='https://2nueikb2o4.execute-api.us-east-2.amazonaws.com/dev/getMostRecentPressureDatafromDB301'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DynamicLineChart title="Pressure sensor 402" uri='https://hvjxqjgul4.execute-api.us-east-2.amazonaws.com/dev/getMostRecentHumidityDatafromDB402'/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Pressure;
