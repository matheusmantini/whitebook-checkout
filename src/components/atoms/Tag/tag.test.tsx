import React from "react";
import { render, screen } from "@testing-library/react";
import Tag from "./";
import styles from "./Tag.module.scss";

describe("Tag Component", () => {
  it("should render tag with correct text", () => {
    render(<Tag text="Promoção" />);
    expect(screen.getByText("Promoção")).toBeInTheDocument();
  });

  it("should apply discount styles when isDiscount is true", () => {
    const { container } = render(<Tag text="-15%" isDiscount />);

    expect(container.firstChild).toHaveClass(styles.Discount);

    expect(screen.getByText("-15%")).toHaveClass(styles.DiscountText);
  });

  it("should not have discount styles by default", () => {
    const { container } = render(<Tag text="Novidade" />);

    expect(container.firstChild).not.toHaveClass(styles.Discount);

    expect(screen.getByText("Novidade")).not.toHaveClass(styles.DiscountText);
  });
});
