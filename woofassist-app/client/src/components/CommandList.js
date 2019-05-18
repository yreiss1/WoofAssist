/* 

    Copyright 2019 - University of Maryland

    Authors: 
        [1] Yuval Reiss
        [2] Michael Reininger

    Description: This file contains the CommandList component, the table where all the commands issued by
    the handler to WoofAssist are displayed.

    Sources:
        [1] Material UI 
        [2] React 

*/

import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import WalkingIcon from "@material-ui/icons/DirectionsWalk";
import InfoIcon from "@material-ui/icons/Info";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DirectionsIcon from "@material-ui/icons/Directions";

class CommandList extends Component {
  constructor(props) {
    super(props);
    console.log("In CommandList: " + Object.values(props.commands));
  }
  state = {
    commands: []
  };

  getCommands() {
    return this.props.commands;
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell aligh="center">Type</TableCell>
              <TableCell align="left">Command</TableCell>
              <TableCell align="left">Timestamp</TableCell>
              <TableCell align="left">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(this.props.commands).map(command => (
              <TableRow key={command.timestamp}>
                <TableCell component="th" scope="row">
                  <Avatar>
                    {command.command.includes("move") ? (
                      <WalkingIcon />
                    ) : command.command.includes("take") ? (
                      <DirectionsIcon />
                    ) : (
                      <PriorityHighIcon />
                    )}
                  </Avatar>
                </TableCell>
                <TableCell align="left">{command.command}</TableCell>
                <TableCell align="left">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                  }).format(command.timestamp)}
                </TableCell>
                <TableCell align="left">
                  <IconButton aria-label="Info">
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default CommandList;
