import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import ProjectPreview from "./ProjectPreview";

test("renders ProjectPreview component", () => {
  render(<ProjectPreview groupId="group1" userId="user1" />);
});
