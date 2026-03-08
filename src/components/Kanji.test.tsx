import { render, screen } from "@testing-library/react";

import { client } from "../api/client";
import { wrapper } from "../test/utils";
import Kanji from "./Kanji";

vi.mock("../api/client", () => ({
  client: { request: vi.fn() },
}));

const mockData = {
  kanji: {
    literal: "猫",
    readings_on: ["ビョウ"],
    readings_kun: ["ねこ"],
    meanings: ["cat"],
  },
};

describe("Kanji", () => {
  it("renders loading state initially", () => {
    vi.mocked(client.request).mockResolvedValue(mockData);
    render(<Kanji />, { wrapper });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders kanji data after loading", async () => {
    vi.mocked(client.request).mockResolvedValue(mockData);
    render(<Kanji />, { wrapper });
    expect(await screen.findByText("猫")).toBeInTheDocument();
    expect(screen.getByText(/ねこ/)).toBeInTheDocument();
    expect(screen.getByText(/ビョウ/)).toBeInTheDocument();
    expect(screen.getByText(/cat/)).toBeInTheDocument();
  });

  it("renders error state when request fails", async () => {
    vi.mocked(client.request).mockRejectedValue(new Error("Network error"));
    render(<Kanji />, { wrapper });
    expect(await screen.findByText("Error loading kanji.")).toBeInTheDocument();
  });
});
