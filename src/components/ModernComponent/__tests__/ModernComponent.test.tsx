import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ModernComponent from "../ModernComponent";

test("Click Button", async () => {
  render(<ModernComponent />);
  const button = screen.getByRole("button", { name: "Modern Button" });
  fireEvent.click(button);
  await screen.findByText("Modern Component");
});
