import React from 'react';
import { connect } from "react-redux";

import { StylesProvider } from "@material-ui/styles";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
