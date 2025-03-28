import React from "react";
import { render, screen } from "@testing-library/react";
import { cardBrands } from "./cardsAvailableBrands";
import styles from "./cardBrands.module.scss";
import CardBrands from "./";

jest.mock("../../atoms/Icons/CreditCardMastercard", () => ({
  __esModule: true,
  default: () => (
    <svg
      data-testid="mastercard-icon"
      aria-label="Logo cartão de crédito mastercard"
      role="img"
    />
  ),
}));

jest.mock("../../atoms/Icons/CreditCardVisa", () => ({
  __esModule: true,
  default: () => (
    <svg
      data-testid="visa-icon"
      aria-label="Logo cartão de crédito visa"
      role="img"
    />
  ),
}));

jest.mock("../../atoms/Icons/CreditCardAmericanExpress", () => ({
  __esModule: true,
  default: () => (
    <svg
      data-testid="americanexpress-icon"
      aria-label="Logo cartão de crédito american express"
      role="img"
    />
  ),
}));

jest.mock("../../atoms/Icons/CreditCardElo", () => ({
  __esModule: true,
  default: () => (
    <svg
      data-testid="elo-icon"
      aria-label="Logo cartão de crédito elo"
      role="img"
    />
  ),
}));

jest.mock("../../atoms/Icons/CreditCardDinnersClub", () => ({
  __esModule: true,
  default: () => (
    <svg
      data-testid="dinnersclub-icon"
      aria-label="Logo cartão de crédito dinners club"
      role="img"
    />
  ),
}));

jest.mock("../../atoms/Icons/IuguLogo", () => ({
  __esModule: true,
  default: () => (
    <svg data-testid="iugu-logo" aria-label="Logo Iugu" role="img" />
  ),
}));

describe("CardBrands Component", () => {
  const allBrands = Object.values(cardBrands);

  it("should render all card brands with correct accessibility attributes", () => {
    render(<CardBrands selectedCard={""} />);

    allBrands.forEach((brand) => {
      const icon = screen.getByTestId(`${brand.toLowerCase()}-icon`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute("role", "img");
      expect(icon).toHaveAttribute("aria-label");
    });
  });

  it("should highlight selected card brand", () => {
    render(<CardBrands selectedCard={cardBrands.MASTERCARD} />);

    const selectedIcon = screen.getByTestId("mastercard-icon").closest("span");
    const unselectedIcon = screen.getByTestId("visa-icon").closest("span");

    expect(selectedIcon).toHaveClass(styles.Selected);
    expect(unselectedIcon).toHaveClass(styles.Grayscale);
  });

  it("should show Iugu payment section", () => {
    render(<CardBrands selectedCard={""} />);

    expect(screen.getByText(/pagamentos por/i)).toBeInTheDocument();
    expect(screen.getByTestId("iugu-logo")).toBeInTheDocument();
  });

  it("should apply grayscale to non-selected brands by default", () => {
    render(<CardBrands selectedCard={""} />);

    const firstBrandIcon = screen
      .getByTestId("mastercard-icon")
      .closest("span");
    expect(firstBrandIcon).toHaveClass(styles.Grayscale);
  });
});
