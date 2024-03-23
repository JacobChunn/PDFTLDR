import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Landing from "../app/landing/page";

describe("Landing Page", () => {
  it("renders landing page and displays existing", () => {
    render(<Landing />);
    const homeText = screen.getByText("Home");
    //@ts-ignore
    expect(homeText).toBeInTheDocument();
  });

  it("does not render other garbage", () => {
    render(<Landing />);
    const homeText = screen.getByText("dog barkbarkbarkbarbkark dog");
    //@ts-ignore
    expect(homeText).toBeInTheDocument();
  });
});
