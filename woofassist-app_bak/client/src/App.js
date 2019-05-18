/* 

    Copyright 2019 - University of Maryland

    Authors: 
        [1] Yuval Reiss
        [2] Michael Reininger

    Description: This file contains the main parent App, all other components
    exist within this component. 

    Sources:
        [1] fetch
        [2] Material UI 
        [3] React 

*/

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import DOA from "./components/DOA";
import AppGrid from "./components/AppGrid";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };
  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log("Some bitch ass data: " + JSON.stringify(res));
        this.setState({ response: res });
      })
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("http://localhost:5000/");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("This is the body:" + JSON.stringify(body));
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };
  render() {
    if (this.state.response === "") {
      return <CircularProgress />;
    } else {
      return (
        <div>
          <NavBar />
          <AppGrid data={this.state.response} />
        </div>
      );
    }
  }
}

export default App;
