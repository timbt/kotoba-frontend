import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { client } from "./api/client";
import App from "./App";
import { wrapper } from "./test/utils";

vi.mock("./api/client", () => ({
  client: { request: vi.fn() },
}));

describe("App", () => {
  it("renders the Kanji component", async () => {
    vi.mocked(client.request).mockResolvedValue({
      kanji: {
        literal: "猫",
        readings_on: ["ビョウ"],
        readings_kun: ["ねこ"],
        meanings: ["cat"],
      },
    });
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      { wrapper },
    );
    expect(await screen.findByText("猫")).toBeInTheDocument();
  });
});
