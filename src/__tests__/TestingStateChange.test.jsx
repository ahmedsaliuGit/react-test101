import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestingStateChange } from "../components/TestingStateChange";

test("Testing page load", () => {
  render(<TestingStateChange />);
  expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
});

test("Toggle text visible", async () => {
  const user = userEvent.setup();

  render(<TestingStateChange />);
  await user.click(screen.getByText(/toggle text/i));
  expect(screen.getByText(/text visible/i)).toBeInTheDocument();
});

test("Button disabled on click", async () => {
  const user = userEvent.setup();

  render(<TestingStateChange />);
  await user.click(screen.getByText(/toggle button disabled/i));
  expect(screen.getByText(/toggle text/i)).toBeDisabled();
});

test("Element added to the list", async () => {
  const user = userEvent.setup();

  render(<TestingStateChange />);
  expect(screen.getAllByTestId("record").length).toBe(3);

  await user.click(screen.getByText(/add to list/i));
  expect(screen.getAllByTestId("record").length).toBe(4);
});

test("Element removed from list", async () => {
  const user = userEvent.setup();

  render(<TestingStateChange />);
  await user.click(screen.getByText(/remove from list/i));
  expect(screen.getAllByTestId("record").length).toBe(2);
});
