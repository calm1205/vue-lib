import { describe, it, expect } from "vitest"
import { add } from "./add"

describe("add", () => {
  it("adds positive numbers", () => {
    expect(add(1, 2)).toBe(3)
  })

  it("adds negative numbers", () => {
    expect(add(-4, -6)).toBe(-10)
  })

  it("adds positive and negative", () => {
    expect(add(10, -3)).toBe(7)
  })

  it("adds zeros", () => {
    expect(add(0, 0)).toBe(0)
  })

  it("adds floating point numbers", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10)
  })
})
