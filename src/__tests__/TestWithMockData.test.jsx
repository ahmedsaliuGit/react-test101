import { render, screen } from "@testing-library/react";
import TestWithMockData from "../components/TestWithMockData";

const mockData = [
  {
    id: 1,
    first_name: "Ahmed",
    last_name: "Saliu",
    email: "ahmed.saliu@testmail.com",
    age: 55,
  },
];

test("Testing Test  with mock data", () => {
  render(<TestWithMockData data={mockData} />);

  const element = screen.getByText(/1Ahmed/i);

  expect(element).toBeInTheDocument();
});
