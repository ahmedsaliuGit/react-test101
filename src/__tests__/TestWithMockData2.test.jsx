import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestWithMockData2 from "../components/TestWithMockData2";

const mockData = [
  {
    id: 1,
    first_name: "Ahmed",
    last_name: "Saliu",
    email: "ahmed.saliu@testmail.com",
    age: 55,
  },
];

test("Testing Test  with mock data 2", () => {
  render(<TestWithMockData2 data={mockData} displayUnorderedList={true} />);

  const element = screen.getByText(/1Ahmed/i);

  expect(element).toBeInTheDocument();
});

test("Email link click handler called", async () => {
  const user = userEvent.setup();
  const mockHandleClick = jest.fn();
  render(
    <TestWithMockData2
      data={mockData}
      displayUnorderedList={true}
      handleClick={mockHandleClick}
    />
  );
  await user.click(screen.getByText(/ahmed.saliu@testmail.com/i));
  expect(mockHandleClick).toHaveBeenCalled();
});
