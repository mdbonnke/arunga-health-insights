import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "@/App";

describe("App render", () => {
  it("mounts without throwing and shows main content", () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>,
    );
    // Index hero — match distinctive substring
    expect(
      screen.getByRole("heading", {
        name: /Digital Health Consultant and Medical Doctor/i,
      }),
    ).toBeInTheDocument();
  });
});
