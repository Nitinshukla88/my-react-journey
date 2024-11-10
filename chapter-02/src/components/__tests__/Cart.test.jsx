
// Best Integration test so far...

import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuCard from "../RestaurantMenuCard";
import NEW_MOCK_DATA from "../mocks/ResMenuCardMock.json"; // This is default import
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(NEW_MOCK_DATA) })
);

test("should verify the cart flow in our app", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenuCard />
            <Cart/>
        </Provider>
        </BrowserRouter>
    )
  );

  const accordian = screen.getByText("McCafe. (23)");


  expect(accordian).toBeInTheDocument();

  fireEvent.click(accordian);

  expect(screen.getAllByTestId("food-items").length).toBe(23);

  const addBtns = screen.getAllByRole("button", {name : "Add+"});

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  const cart = screen.getByText("Cart - (1 items)");

  fireEvent.click(cart);

  expect(screen.getAllByTestId("food-items").length).toBe(24);

  fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}));

  expect(screen.getAllByTestId("food-items").length).toBe(23);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  expect(screen.getByText("Cart is empty. Add more items")).toBeInTheDocument();

});
