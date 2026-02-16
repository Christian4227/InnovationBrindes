import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "../app/(public)/login/page";

test("Page", () => {
    render(<Login />);
    expect(screen.getByRole("heading", { level: 1, name: "Bem-vindo a Innovation Brindes" })).toBeDefined();
});
