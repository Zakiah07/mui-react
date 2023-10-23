import React from "react";
import "./App.css";
import InputComponents from "./InputComponents";
import AccordionComp from "./AccordionComp";
import DataDisplay from "./DataDisplay";
import DataTable from "./DataTable";
import Cards from "./Cards";
import Nav from "./Nav";
import MenuButton from "./MenuButton";

function App() {
  return (
    <div className="App">
      <div>
        <MenuButton />
        <Nav />
      </div>
      <h1>Hi, let's get some info about you</h1>
      <AccordionComp />
      <DataDisplay />
      <InputComponents />
      <DataTable />
      <Cards />
    </div>
  );
}

export default App;
