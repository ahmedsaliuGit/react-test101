import { render, screen, waitFor } from "@testing-library/react";
import { TestingStateChangeAPI } from "../components/TestingStateChangeAPI";
import * as services from "../utils/Services";

test("should test API calls", async () => {
  const mockFetchData = jest
    .spyOn(services, "FetchData")
    .mockImplementation(async () => {
      return [
        {
          id: 1,
          name: "Ahmed",
        },
      ];
    });

  render(<TestingStateChangeAPI />);
  expect(mockFetchData).toHaveBeenCalled();

  await waitFor(() => {
    expect(screen.getByText(/Ahmed/i)).toBeInTheDocument();
  });
});
