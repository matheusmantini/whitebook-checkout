import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "./";
import InputMask from "react-input-mask";

jest.mock("react-input-mask", () => jest.fn((props) => <input {...props} />));

describe("Input Component", () => {
  const mockError = { message: "Invalid input", type: "validation" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render basic input without mask", () => {
    render(<Input id="test" label="Name" />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should apply mask when maskKey is provided", () => {
    render(<Input id="cardNumber" maskKey="cardNumber" />);

    expect(InputMask).toHaveBeenCalledWith(
      expect.objectContaining({
        mask: "9999 9999 9999 9999",
      }),
      expect.anything(),
    );
  });

  it("should display error message and styling", () => {
    render(<Input error={mockError} />);

    expect(screen.getByText("Invalid input")).toBeInTheDocument();
    expect(screen.getByRole("textbox").closest("div")).toHaveClass("HasError");
  });

  it("should pass additional props to input", () => {
    render(<Input data-testid="custom-input" />);

    expect(screen.getByTestId("custom-input")).toBeInTheDocument();
  });
});
