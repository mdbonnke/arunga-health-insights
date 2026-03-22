import { describe, it, expect } from "vitest";
import { SITE, CONTACT, NAV_LINKS } from "@/lib/constants";

describe("SITE constants", () => {
  it("has a non-empty name", () => {
    expect(SITE.name.length).toBeGreaterThan(0);
  });

  it("has a non-empty description", () => {
    expect(SITE.description.length).toBeGreaterThan(0);
  });
});

describe("CONTACT constants", () => {
  it("email is a valid email format", () => {
    expect(CONTACT.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("linkedin URL starts with https", () => {
    expect(CONTACT.linkedin).toMatch(/^https:\/\//);
  });

  it("github URL starts with https", () => {
    expect(CONTACT.github).toMatch(/^https:\/\//);
  });
});

describe("NAV_LINKS", () => {
  it("contains at least one link", () => {
    expect(NAV_LINKS.length).toBeGreaterThan(0);
  });

  it("every link has a non-empty to and label", () => {
    NAV_LINKS.forEach((link) => {
      expect(link.to.length).toBeGreaterThan(0);
      expect(link.label.length).toBeGreaterThan(0);
    });
  });

  it("home link is first and points to /", () => {
    expect(NAV_LINKS[0].to).toBe("/");
  });
});
