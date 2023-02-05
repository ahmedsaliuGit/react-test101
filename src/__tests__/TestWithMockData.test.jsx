import { render, screen } from "@testing-library/react";
import TestWithMockData2 from "../components/TestWithMockData2";
import { TestWithMockData } from "../components/TestWithMockData2";

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

test("Testing Test  with mock data 2", () => {
  render(<TestWithMockData2 data={mockData} displayUnorderedList={true} />);

  const element = screen.getByText(/1Ahmed/i);

  expect(element).toBeInTheDocument();
});
