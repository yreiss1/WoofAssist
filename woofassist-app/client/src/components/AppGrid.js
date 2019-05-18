/* 

    Copyright 2019 - University of Maryland

    Authors: 
        [1] Yuval Reiss
        [2] Michael Reininger

    Description: This file contains the AppGrid component which provides and organizational schema
    for all the other components within the application.

    Sources:
        [1] Google 
        [2] Material UI 
        [3] React 

*/

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CommandList from "./CommandList";
import { withStyles } from "@material-ui/core/styles";
import Status from "./Status";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DOA from "./DOA";
import Map from "./Map";
import { Divider } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class AppGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      padding: 24
    };
    return (
      <Grid container style={style} justify="center">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom component="h2">
            Map
          </Typography>
          <Paper>
            <div>
              <Map />
            </div>
          </Paper>
        </Grid>

        <Grid item style={{ paddingTop: 16, paddingRight: 24 }} xs={7}>
          <Typography variant="h4" gutterBottom component="h2">
            Feedback
          </Typography>
          <Paper>
            <DOA />
          </Paper>
        </Grid>
        <Grid item style={{ paddingTop: 16, paddingLeft: 24 }} xs={5}>
          <Typography variant="h4" gutterBottom component="h2">
            Dog's Status
          </Typography>
          <Paper>
            <Status />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ paddingTop: 16 }}
            variant="h4"
            gutterBottom
            component="h2"
          >
            Commands
          </Typography>
          <CommandList commands={this.props.data} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AppGrid);
