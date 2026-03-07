import { render, screen } from "@testing-library/react";
import Kanji from "./Kanji";

describe("Kanji", () => {
  it("renders the kanji character", () => {
    render(<Kanji />);
    expect(screen.getByText("猫")).toBeInTheDocument();
  });
});
