import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AvailablePlanCard from "./";
import styles from "./availablePlanCard.module.scss";

const mockPlan = {
  title: "Basic Plan",
  priceFrom: "R$ 100",
  priceTo: "R$ 90",
  discount: "-10%",
  installment: "3x sem juros",
};

describe("AvailablePlanCard Component", () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it("should render all plan information correctly", () => {
    render(<AvailablePlanCard {...mockPlan} />);

    expect(
      screen.getByRole("heading", { name: /basic plan/i }),
    ).toBeInTheDocument();

    const priceFromElement = screen.getByText(/de/i).querySelector("span");
    expect(priceFromElement).toHaveTextContent("R$ 100");
    expect(screen.getByText(/por r\$ 90/i)).toBeInTheDocument();

    expect(screen.getByText("3x sem juros")).toBeInTheDocument();

    expect(screen.getByText("-10%")).toBeInTheDocument();
  });

  it("should show selected state when selected", () => {
    render(<AvailablePlanCard {...mockPlan} selected={true} />);

    const card = screen.getByRole("button");
    expect(card).toHaveClass(styles.Selected);
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("should trigger onSelect when clicked", () => {
    render(<AvailablePlanCard {...mockPlan} onSelect={mockOnSelect} />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  it("should handle keyboard navigation", () => {
    render(<AvailablePlanCard {...mockPlan} onSelect={mockOnSelect} />);

    const card = screen.getByRole("button");
    fireEvent.keyDown(card, { key: "Enter" });
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  it("should do not render discount tag when no discount", () => {
    const { ...planWithoutDiscount } = mockPlan;
    render(<AvailablePlanCard {...planWithoutDiscount} />);

    expect(screen.queryByText("10% OFF")).toBeNull();
  });

  it("should have proper accessibility attributes", () => {
    render(<AvailablePlanCard {...mockPlan} />);

    const card = screen.getByRole("button");
    expect(card).toHaveAttribute("tabindex", "0");
    expect(card).toHaveAttribute("role", "button");
  });
});
