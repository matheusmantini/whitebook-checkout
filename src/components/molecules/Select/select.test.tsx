import React from "react";
import { render, screen } from "@testing-library/react";
import { Select } from "./";
import styles from "./select.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

jest.mock("../../atoms/Icons/ChevronDown", () => ({
  __esModule: true,
  default: () => <svg data-testid="chevron-icon" />,
}));

const mockOptions = [
  { value: "opt1", label: "Option 1" },
  { value: "opt2", label: "Option 2" },
];

const createMockRegister = (): UseFormRegisterReturn => ({
  onChange: jest.fn(),
  onBlur: jest.fn(),
  ref: jest.fn(() => {}),
  name: "testField",
});

describe("Select Component", () => {
  it("should renders label and options correctly", () => {
    const mockRegister = createMockRegister();
    render(
      <Select
        id="test-select"
        register={mockRegister}
        label="Choose option"
        options={mockOptions}
      />,
    );

    expect(screen.getByLabelText("Choose option")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("should shows chevron icon and applies styles", () => {
    const mockRegister = createMockRegister();
    const { container } = render(
      <Select options={mockOptions} register={mockRegister} />,
    );

    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument();
    expect(
      container.querySelector(`.${styles.SelectWrapper}`),
    ).toBeInTheDocument();
  });
});
