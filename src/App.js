import React from "react";
import { MyNav } from "./components/MyNav.jsx";
import { AllTheBooks } from "./components/AllTheBooks.jsx";
import { AlertWelcome } from "./components/Welcome.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyFooter } from "./components/MyFooter.jsx";

function App() {
  return (
    <>
      <MyNav />
      <AlertWelcome key={1} variant={"primary"} />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
