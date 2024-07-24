import React, { useState } from "react";
import "./App.css";
import FilterButtons from "./components/FilterButtons";
import MachineList from "./components/MachineList";

interface Machine {
  id: number;
  name: string;
  status: string;
}

const mockMachines: Machine[] = [
  { id: 1, name: "Line 3 Extruder", status: "acceptable" },
  { id: 2, name: "Line 3 - Auxiliary Extruder 1", status: "danger" },
  { id: 3, name: "Extruder 4", status: "no status" },
  { id: 4, name: "Line 5 Mixer", status: "monitor" },
  { id: 5, name: "Line 6 Extruder", status: "alarm" },
  { id: 6, name: "Line 7 Cooler", status: "acceptable" },
  { id: 7, name: "Line 8 Heater", status: "danger" },
  { id: 8, name: "Line 9 Pump", status: "monitor" },
  { id: 9, name: "Line 10 Blower", status: "alarm" },
  { id: 10, name: "Line 11 Grinder", status: "" },
];

function App() {
  const [filter, setFilter] = useState<string>("all");

  return (
    <div className="App">
      <FilterButtons setFilter={setFilter} activeFilter={filter} />
      <MachineList machines={mockMachines} filter={filter} />
    </div>
  );
}

export default App;
