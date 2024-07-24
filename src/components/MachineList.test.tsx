import React from "react";
import { render, screen } from "@testing-library/react";
import MachineList from "./MachineList";
import "@testing-library/jest-dom";

const mockMachines = [
  { id: 1, name: "Line 3 Extruder", status: "acceptable" },
  { id: 2, name: "Line 3 - Auxiliary Extruder 1", status: "danger" },
  { id: 3, name: "Extruder 4", status: "no status" },
];

test("renders machine list based on filter", () => {
  render(<MachineList machines={mockMachines} filter="danger" />);

  expect(screen.getByText("Line 3 - Auxiliary Extruder 1")).toBeInTheDocument();
  expect(screen.queryByText("Line 3 Extruder")).toBeNull();
});

test("renders all machines when filter is all", () => {
  render(<MachineList machines={mockMachines} filter="all" />);

  expect(screen.getByText("Line 3 Extruder")).toBeInTheDocument();
  expect(screen.getByText("Line 3 - Auxiliary Extruder 1")).toBeInTheDocument();
  expect(screen.getByText("Extruder 4")).toBeInTheDocument();
});

test("renders no status machines correctly", () => {
  render(<MachineList machines={mockMachines} filter="no status" />);

  expect(screen.getByText("Extruder 4")).toBeInTheDocument();
  expect(screen.queryByText("Line 3 Extruder")).toBeNull();
  expect(screen.queryByText("Line 3 - Auxiliary Extruder 1")).toBeNull();
});
