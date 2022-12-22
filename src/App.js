import React from "react";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome
          name="Mariello"
          age={29} />
          <h2>I 30 sono dietro l'angolo</h2>
      </div>
    );
  }
}

export default App;
