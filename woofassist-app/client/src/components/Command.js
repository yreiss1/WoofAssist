import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import WalkingIcon from "@material-ui/icons/DirectionsWalk";
import InfoIcon from "@material-ui/icons/Info";

class Command extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              {this.props.action == "move" ? (
                <WalkingIcon />
              ) : (
                <PriorityHighIcon />
              )}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={this.props.data}
            secondary={this.state.secondary ? "Secondary text" : null}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Info">
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>{" "}
      </div>
    );
  }
}

export default Command;
