import React from "react";
import "./App.css";
import Activities from "./components/Activities/Activities";
import Apartments from "./components/apartments/Apartments";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Partners from "./components/partners/Partners";
import Philosophy from "./components/Philosophy/Philosophy";

function App() {
  return (
    <>
      <Main />
      <Activities />
      <Philosophy />
      <Apartments />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
