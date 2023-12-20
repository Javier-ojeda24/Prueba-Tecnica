import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import "@testing-library/jest-dom";

import App from "./App";

test("Renders Task and List buttons", () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const tasksButton = screen.getByText("Tasks");
  const listButton = screen.getByText("List");

  expect(tasksButton).toBeInTheDocument();
  expect(listButton).toBeInTheDocument();
});