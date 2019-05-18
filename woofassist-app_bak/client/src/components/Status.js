/* 

    Copyright 2019 - University of Maryland

    Authors: 
        [1] Yuval Reiss
        [2] Michael Reininger

    Description: This file contains the Status component, this component is responsible for providing
    details about the seeing eye dog.

    Sources:
        [1] Material UI 
        [2] React 

*/

import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const style = theme => ({
  healthy: {
    color: "green"
  }
});

class Status extends Component {
  render() {
    const style = {
      paddingTop: 24
    };

    return (
      <div>
        <Typography style={style} gutterBottom variant="h4" align="center">
          5hrs
        </Typography>
        <Typography gutterBottom align="center">
          Since last meal
        </Typography>

        <Divider />
        <Typography style={style} gutterBottom variant="h4" align="center">
          32hrs
        </Typography>
        <Typography gutterBottom align="center">
          Since last bathroom break
        </Typography>
        <Divider />
        <Typography
          style={style}
          gutterBottom
          variant="h4"
          align="center"
          className={this.props.classes.healthy}
        >
          101.75°
        </Typography>
        <Typography style={{ paddingBottom: 8 }} gutterBottom align="center">
          Dog's temperature
        </Typography>
      </div>
    );
  }
}

export default withStyles(style)(Status);
