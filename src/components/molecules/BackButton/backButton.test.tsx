import React from "react";
import { render, screen } from "@testing-library/react";
import { BackButton } from "./";

jest.mock("../../atoms/Icons/ChevronLeft", () => ({
  __esModule: true,
  default: () => <svg data-testid="chevron-icon" />,
}));

describe("BackButton Component", () => {
  const testHref = "/";

  it("should render link with correct navigation attributes", () => {
    render(<BackButton href={testHref} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", testHref);
    expect(linkElement).toHaveAttribute(
      "aria-label",
      "Ir para a página inicial",
    );
  });

  it("should use custom aria-label when provided", () => {
    const customLabel = "Voltar para lista";
    render(<BackButton href={testHref} ariaLabel={customLabel} />);

    expect(screen.getByRole("link")).toHaveAttribute("aria-label", customLabel);
  });

  it("should contain chevron left icon", () => {
    render(<BackButton href={testHref} />);

    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument();
  });

  it("should pass additional props to link component", () => {
    render(<BackButton href={testHref} data-testid="custom-back" />);

    const link = screen.getByTestId("custom-back");
    expect(link).toBeInTheDocument();
  });

  it("should apply default styling", () => {
    const { container } = render(<BackButton href={testHref} />);

    expect(container.firstChild).toHaveClass("Container"); // Replace with actual class name from styles
  });
});
