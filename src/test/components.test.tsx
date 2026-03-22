import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SectionHeading from "@/components/SectionHeading";
import ErrorBoundary from "@/components/ErrorBoundary";

// Helper to wrap components that need routing context
const withRouter = (ui: React.ReactElement) => (
  <HelmetProvider>
    <MemoryRouter>{ui}</MemoryRouter>
  </HelmetProvider>
);

describe("SectionHeading", () => {
  it("renders the title", () => {
    render(withRouter(<SectionHeading title="Test Title" />));
    expect(screen.getByText("Test Title")).toBeDefined();
  });

  it("renders subtitle when provided", () => {
    render(withRouter(<SectionHeading title="Title" subtitle="A subtitle" />));
    expect(screen.getByText("A subtitle")).toBeDefined();
  });

  it("does not render subtitle when omitted", () => {
    render(withRouter(<SectionHeading title="Title" />));
    expect(screen.queryByText("A subtitle")).toBeNull();
  });

  it("renders with an id when provided", () => {
    render(withRouter(<SectionHeading title="Title" id="my-heading" />));
    const el = document.getElementById("my-heading");
    expect(el).not.toBeNull();
    expect(el?.textContent).toBe("Title");
  });
});

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <p>All good</p>
      </ErrorBoundary>
    );
    expect(screen.getByText("All good")).toBeDefined();
  });

  it("renders fallback UI when a child throws", () => {
    const ThrowingComponent = () => {
      throw new Error("Test error");
    };

    // Suppress the expected console.error from React
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong")).toBeDefined();
    spy.mockRestore();
  });
});
