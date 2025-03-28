import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "./";
import styles from "./tooltip.module.scss";

describe("Tooltip Component", () => {
  it("should render children and tooltip content", () => {
    render(
      <Tooltip content="Help text">
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Help text")).toHaveClass(styles.Text);
  });

  it("should show tooltip on hover", async () => {
    render(
      <Tooltip content="More information">
        <span>Trigger</span>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText("Trigger"));
    expect(screen.getByText("More information")).toHaveClass(styles.Text);
  });

  it("should maintain positioning classes", () => {
    const { container } = render(
      <Tooltip content="Test">
        <button>Test</button>
      </Tooltip>,
    );

    expect(container.firstChild).toHaveClass(styles.Tooltip);
  });
});
