import React from "react";
import { render, screen } from "@testing-library/react";
import styles from "./label.module.scss";
import Label from "./";

describe("Label Component", () => {
  it("should render label with correct content", () => {
    render(<Label htmlFor="input">Test Label</Label>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should apply htmlFor attribute correctly", () => {
    render(<Label htmlFor="email-input">Email</Label>);
    expect(screen.getByText("Email")).toHaveAttribute("for", "email-input");
  });

  it("should apply error styles when hasError is true", () => {
    render(<Label hasError>Error Label</Label>);
    const label = screen.getByText("Error Label");
    expect(label).toHaveClass(styles.hasError);
    expect(label).toHaveAttribute("aria-invalid", "true");
  });

  it("should not have error styles by default", () => {
    render(<Label>Normal Label</Label>);
    const label = screen.getByText("Normal Label");
    expect(label).not.toHaveClass(styles.hasError);
    expect(label).not.toHaveAttribute("aria-invalid");
  });

  it("should pass additional props to label element", () => {
    render(<Label data-testid="custom-label">Test</Label>);
    expect(screen.getByTestId("custom-label")).toBeInTheDocument();
  });
});
