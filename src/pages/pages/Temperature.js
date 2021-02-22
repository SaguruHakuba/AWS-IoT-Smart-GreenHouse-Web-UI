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

function Temperature() {
  return (
    <React.Fragment>
      <Helmet title="Temperature" />
      <Typography variant="h3" gutterBottom display="inline">
        Temperature
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Typography>Temperature</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <DynamicLineChart title="Temperature sensor 101" uri='https://r0s3d5fz4k.execute-api.us-east-2.amazonaws.com/dev/getMostRecentTemperatureDatafromDB101'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DynamicLineChart title="Temperature sensor 102" uri='https://5f1sl59xxc.execute-api.us-east-2.amazonaws.com/dev/getMostRecentTemperatureDatafromDB102'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DynamicLineChart title="Temperature sensor 202" uri='https://vq7pzi3axe.execute-api.us-east-2.amazonaws.com/dev/getMostRecentTemperatureDatafromDB202'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DynamicLineChart title="Temperature sensor 203" uri='https://rnmtrhpe2i.execute-api.us-east-2.amazonaws.com/dev/getMostRecentTemperatureDatafromDB203'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DynamicLineChart title="Temperature sensor 204" uri='https://01mm8iybzl.execute-api.us-east-2.amazonaws.com/dev/getMostRecentTemperatureDatafromDB204'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DynamicLineChart title="Temperature sensor 205" uri='https://5h91fjsbql.execute-api.us-east-2.amazonaws.com/dev/getMostRecentTemperatureDatafromDB205'/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Temperature;
