import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BUTTON_VARIANTS } from "./variants";
import styles from "./button.module.scss";
import Button from "./";

describe("Button Component", () => {
  it("should render as a button when href is not provided", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render as a link when href is provided", () => {
    render(<Button href="/test">Test Link</Button>);
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
  });

  it("should apply the correct variant class", () => {
    const { rerender } = render(
      <Button variant={BUTTON_VARIANTS.Primary}>Test</Button>,
    );
    expect(screen.getByRole("button")).toHaveClass(styles.Primary);

    rerender(<Button variant={BUTTON_VARIANTS.Secondary}>Test</Button>);
    expect(screen.getByRole("button")).toHaveClass(styles.Secondary);
  });

  it("should disable the button when disabled prop is true", () => {
    render(<Button disabled>Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass(styles.Disabled);
  });

  it("should apply aria-disabled and tabIndex for disabled link", () => {
    render(
      <Button href="/test" disabled>
        Test
      </Button>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveAttribute("tabindex", "-1");
    expect(link).toHaveClass(styles.Disabled);
  });

  it("should use aria-label when provided", () => {
    render(<Button ariaLabel="Accessible Button">Test</Button>);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Accessible Button",
    );
  });

  it("should apply custom fontSize and fontWeight styles", () => {
    render(
      <Button fontSize={16} fontWeight={600}>
        Test
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ fontSize: "16px", fontWeight: "600" });
  });

  it("should convert numeric fontSize to pixels", () => {
    render(<Button fontSize={12}>Test</Button>);
    expect(screen.getByRole("button")).toHaveStyle("font-size: 12px");
  });

  it("should use string fontSize as is", () => {
    render(<Button fontSize="1.5rem">Test</Button>);
    expect(screen.getByRole("button")).toHaveStyle("font-size: 1.5rem");
  });

  it('should make type "button" as default', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("should use the type prop when specified", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("should apply rel and target attributes to links", () => {
    render(
      <Button href="/test" rel="noopener" target="_blank">
        Test
      </Button>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("rel", "noopener");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should pass additional props to the element", () => {
    const handleClick = jest.fn();
    render(
      <Button data-testid="custom-btn" onClick={handleClick}>
        Test
      </Button>,
    );
    const btn = screen.getByTestId("custom-btn");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });
});
