import { render, screen } from "@testing-library/react";
import MainPage from ".";

describe("MainPage", () => {
  it("render page", async () => {
    render(<MainPage />);
    await screen.findByText("LandingPage");
  });
});
