import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterButtons from "./FilterButtons";

test("renders filter buttons and triggers filter function on click", () => {
  const setFilter = jest.fn();
  render(<FilterButtons setFilter={setFilter} activeFilter="acceptable" />);

  const button = screen.getByText("Acceptable");
  fireEvent.click(button);

  expect(setFilter).toHaveBeenCalledWith("acceptable");
});

test("highlights the active button", () => {
  const { getByText } = render(
    <FilterButtons setFilter={() => {}} activeFilter="monitor" />
  );
  const activeButton = getByText("Monitor");

  expect(activeButton).toHaveStyle({
    backgroundColor: "#ffc107",
    color: "white",
  });
});
