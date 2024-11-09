import { act, fireEvent, render, screen } from "@testing-library/react";
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

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(12); // Here we are not considering lazy loaded cards

  const searchButton = screen.getByRole("button", { name : "Search"});

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {target : {value : "Burgers"}});

  fireEvent.click(searchButton);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(3);

});

test("should check the top restaurant search Button functionality", async () => {
  // This test is an example of integration testing

  await act(async () => // In this component BrowserRouter is provided because jest-dom does not contain Link component which our Body component is currently using
    render(
      <BrowserRouter> 
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedButton = screen.getByRole("button", {name : "Top rated Restaurants"});

  fireEvent.click(topRatedButton);

  const totalResCards = screen.getAllByTestId("resCard");

  expect(totalResCards.length).toBe(19);

});
