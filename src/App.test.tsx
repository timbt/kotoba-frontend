import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import App from "./App";
import { wrapper } from "./test/utils";

describe("App", () => {
  it("renders the SearchBar component", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      { wrapper },
    );
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });
});
