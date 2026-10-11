import { describe, expect, it } from "vitest";
import { filterVehicles } from "@/data/vehicles";
describe("Provisional stock filtering", () => {
  it("filters by exact brand", () => {
    expect(filterVehicles("Porsche", "", "").map((v) => v.slug)).toEqual(["porsche-911"]);
  });
  it("filters by model year", () => {
    expect(filterVehicles("", "2023", "").map((v) => v.slug)).toEqual(["range-rover-sport"]);
  });
  it("combines filters and handles empty results", () => {
    expect(filterVehicles("Porsche", "2023", "")).toHaveLength(0);
  });
  it("includes only demo prices up to 500000 in the lower band", () => {
    expect(filterVehicles("", "", "under").map((v) => v.price)).toEqual([459000]);
  });
});
