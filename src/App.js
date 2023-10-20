import React from "react";
import "./App.css";
import InputComponents from "./InputComponents";
import AccordionComp from "./AccordionComp";
import DataDisplay from "./DataDisplay";
import DataTable from "./DataTable";

function App() {
  return (
    <div className="App">
      <h1>Hi, let's get some info about you</h1>
      <AccordionComp />
      <DataDisplay />
      <InputComponents />
      <DataTable />
    </div>
  );
}

export default App;
