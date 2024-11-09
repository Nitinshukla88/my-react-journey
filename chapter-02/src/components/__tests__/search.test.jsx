import { act, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/fetchFunctionMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the Body with the search functionality", async () => {
  // This test is an example of integration testing

  await act(async () => // In this component BrowserRouter is provided because jest-dom does not contain Link component which our Body component is currently using
    render(
      <BrowserRouter> 
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByRole("button", { name : "Search"});

  expect(searchButton).toBeInTheDocument();

});
