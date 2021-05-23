import React from "react";
import "./App.css";

// components
import Container from "@material-ui/core/Container";
import MenuAppBar from "./components/Header";
import Home from "./components/Header/temp";

function App() {
  return (
    <>
      <MenuAppBar />

      <Container>
        <div className="App">
          <Home />
        </div>
      </Container>
    </>
  );
}

export default App;
