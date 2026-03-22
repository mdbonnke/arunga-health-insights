import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";
import { clinicalAreas } from "@/data/clinicalAreas";
import { analyticsSkills, analyticsApplications } from "@/data/analyticsData";
import { researchInterests } from "@/data/researchData";

describe("projects data", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project has required fields", () => {
    projects.forEach((p) => {
      expect(p.title.length).toBeGreaterThan(0);
      expect(p.tag.length).toBeGreaterThan(0);
      expect(p.problem.length).toBeGreaterThan(0);
      expect(p.approach.length).toBeGreaterThan(0);
      expect(p.tools.length).toBeGreaterThan(0);
      expect(p.outcome.length).toBeGreaterThan(0);
      expect(p.summary.length).toBeGreaterThan(0);
    });
  });

  it("project titles are unique", () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe("clinicalAreas data", () => {
  it("has exactly 6 clinical areas", () => {
    expect(clinicalAreas.length).toBe(6);
  });

  it("every area has title, desc, and iconName", () => {
    clinicalAreas.forEach((area) => {
      expect(area.title.length).toBeGreaterThan(0);
      expect(area.desc.length).toBeGreaterThan(0);
      expect(area.iconName.length).toBeGreaterThan(0);
    });
  });
});

describe("analyticsData", () => {
  it("has 3 skills", () => {
    expect(analyticsSkills.length).toBe(3);
  });

  it("has 3 applications", () => {
    expect(analyticsApplications.length).toBe(3);
  });

  it("skills have name, detail, and iconName", () => {
    analyticsSkills.forEach((s) => {
      expect(s.name.length).toBeGreaterThan(0);
      expect(s.detail.length).toBeGreaterThan(0);
      expect(s.iconName.length).toBeGreaterThan(0);
    });
  });
});

describe("researchData", () => {
  it("has at least one research interest", () => {
    expect(researchInterests.length).toBeGreaterThan(0);
  });

  it("every interest has title, desc, and iconName", () => {
    researchInterests.forEach((item) => {
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.desc.length).toBeGreaterThan(0);
      expect(item.iconName.length).toBeGreaterThan(0);
    });
  });
});
