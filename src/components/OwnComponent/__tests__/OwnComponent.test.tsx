import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import OwnComponent from "../OwnComponent";

test("Start Timer from 0", async () => {
  render(<OwnComponent />);
  const button = screen.getByRole("button", { name: "Start/Stop" });
  fireEvent.click(button);
  //Check value after 2 seconds
  setTimeout(() => {
    var element1 = screen.getByTestId("scnds").textContent;
    var newSnds = Number(element1);
    expect(newSnds).toBe(2);
  }, 2000);
});

test("Start Timer from value greater than 0", () => {
  render(<OwnComponent />);
  const button = screen.getByRole("button", { name: "Start/Stop" });
  fireEvent.click(button);
  //Stop watch after 2 seconds
  setTimeout(() => {
    fireEvent.click(button);
  }, 2000);
  //Start watch again
  fireEvent.click(button);
  //Stop watch after 2 seconds
  setTimeout(() => {
    fireEvent.click(button);
    var element1 = screen.getByTestId("scnds").textContent;
    var newSnds = Number(element1);
    expect(newSnds).toBe(4);
  }, 2000);
});

test("Stop Timer", () => {
  render(<OwnComponent />);
  const button = screen.getByRole("button", { name: "Start/Stop" });
  fireEvent.click(button);
  setTimeout(() => {
    fireEvent.click(button);
  }, 2000);
  //Click stop watch after 2 seconds
  setTimeout(() => {
    var element1 = screen.getByTestId("scnds").textContent;
    var newSnds = Number(element1);
    expect(newSnds).toBe(2);
  }, 2000);
});

test("Reset Timer", () => {
  render(<OwnComponent />);
  const button = screen.getByRole("button", { name: "Start/Stop" });
  const buttonr = screen.getByRole("button", { name: "Reset" });
  fireEvent.click(button);
  setTimeout(() => {
    fireEvent.click(buttonr);
    var element1 = screen.getByTestId("scnds").textContent;
    var newSnds = Number(element1);
    expect(newSnds).toBe(0);
  }, 2000);
});
