import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from ".";
import styles from "./radioButton.module.scss";

describe("RadioButton Component", () => {
  const mockOnChange = jest.fn();

  it("should render a radio button with label", () => {
    render(<RadioButton name="test" label="Option 1" />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("should reflect checked state correctly", () => {
    const { rerender } = render(
      <RadioButton name="test" label="Option" checked={false} />,
    );
    expect(screen.getByRole("radio")).not.toBeChecked();

    rerender(<RadioButton name="test" label="Option" checked={true} />);
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("should apply correct name attribute", () => {
    render(<RadioButton name="gender" label="Male" />);
    expect(screen.getByRole("radio")).toHaveAttribute("name", "gender");
  });

  it("should trigger onChange with inverted checked state", () => {
    render(<RadioButton name="test" label="Option" onChange={mockOnChange} />);
    const radio = screen.getByRole("radio");

    fireEvent.click(radio);
    expect(mockOnChange).toHaveBeenCalledWith(false);

    fireEvent.click(radio);
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  it("should apply custom radio styles when checked", () => {
    render(<RadioButton name="test" label="Option" checked={true} />);
    const customRadio = screen.getByRole("radio").nextSibling;
    expect(customRadio).toHaveClass(styles.CustomRadio);
  });
});
