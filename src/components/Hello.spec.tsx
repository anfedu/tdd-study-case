import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello", () => {
  it("render Hello World", () => {
    render(<Hello />);
    const myElement = screen.getByText(/Hello/);
    expect(myElement).toBeInTheDocument();
  });
});
