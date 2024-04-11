import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import LoginPage from "./login";

// getBy -> throws error
// queryBy -> null
// findBy -> async

describe("Login Page", () => {
  it("should render with required fields", () => {
    // Arrange
    render(<LoginPage />);
    // Act
    // Assert
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log In" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Remember me" })
    ).toBeInTheDocument();

    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
  });
});
