import React, { Component } from "react";
import Player from "./Player";
import Sidebar from "./SideBar";

class App extends Component {
  state = {
    isOpen: false
  };

  openMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <div className="App">
        <button
          style={{ zIndex: 1, position: "absolute", right: 0 }}
          onClick={this.openMenu}
        >
          x
        </button>
        <Sidebar isOpen={this.state.isOpen} />
        <Player />
      </div>
    );
  }
}

export default App;
