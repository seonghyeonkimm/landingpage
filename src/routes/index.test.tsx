import { render, screen } from "@testing-library/react";
import MainPage from ".";

describe("MainPage", () => {
  it("render page", async () => {
    const { debug } = render(<MainPage />);
    const appBarButton = await screen.findByRole("button", {
      name: "얼리 엑세스 신청하기",
    });
  });
});
