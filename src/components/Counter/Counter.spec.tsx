import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

it("defaultCount=0, then counter=1", () => {
  render(<Counter defaultCount={0} description="My Counter" />);
  expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
  expect(screen.getByText(/my counter/i)).toBeInTheDocument();
});

it("defaultCount=0, and + clicked then counter = 1", () => {
  render(<Counter defaultCount={0} description="My Counter" />);
  fireEvent.click(screen.getByRole("button", { name: "Add to Counter" }));
  expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
});

it("defaultCount=0, and + clicked then counter = -1", () => {
  render(<Counter defaultCount={0} description="My Counter" />);
  fireEvent.click(
    screen.getByRole("button", { name: "Subtract from Counter" })
  );
  expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
});
