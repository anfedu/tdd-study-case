import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  describe('Initialized with defaultCounter=10 and description="WWW"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description="WWW" />);
    });

    it("renders Current Count: 10", () => {
      expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
    });

    it("renders title as 'WWW'", () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });

    describe('when the incrementor change to 5 and "+" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Add to Counter" }));
      });

      it('renders "Current Count: 15"', () => {
        expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
      });
    });

    describe('when the incrementor change to 25 and "-" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}25");
        user.click(
          screen.getByRole("button", { name: "Subtract from Counter" })
        );
      });

      it('renders "Current Count: -15"', () => {
        expect(screen.getByText("Current Count: -15")).toBeInTheDocument();
      });
    });
  });

  describe('Initialized with defaultCounter=0 and description="My Counter"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="My Counter" />);
    });

    it("renders Current Count: 0", () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it("renders title as 'My Counter'", () => {
      expect(screen.getByText(/My Counter/)).toBeInTheDocument();
    });

    describe("when - is clicked", () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole("button", { name: "Subtract from Counter" })
        );
      });

      it("renders 'Current Count: -1'", () => {
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
      });
    });

    describe("when + is clicked", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Add to Counter" }));
      });

      it("renders 'Current Count: 1'", () => {
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
      });
    });
  });
});
