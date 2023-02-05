import { render, screen } from "@testing-library/react";
import FirstTest from "../components/FirstTest";

test("Testing First Test Component.", () => {
  render(<FirstTest />);

  const element = screen.getByText(/First Test/i);

  expect(element).toBeInTheDocument();
});
