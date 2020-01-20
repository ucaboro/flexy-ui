import React from "react";
import { GlobalStyles } from "./globals";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main />
    </>
  );
}

export default App;
