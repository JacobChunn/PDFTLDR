import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import the necessary package

import Landing from "../app/landing/page";

describe("Landing Page", () => {
  it("renders landing page and displays existing", () => {
    render(<Landing />);
    const homeText = screen.getByText("Home");
    expect(homeText).toBeInTheDocument();
  });

  it("does not render other garbage", () => {
    render(<Landing />);
    const homeText = screen.getByText("dog barkbarkbarkbarbkark dog");
    expect(homeText).toBeInTheDocument();
  });
});
