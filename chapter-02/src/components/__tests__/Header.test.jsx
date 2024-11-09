import { Provider } from "react-redux";
import { Header } from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should get the number of items in the cart", () => {
  render(
    // Here we have to do additional things unlike othere tests because header component is using redux toolkit and BrowserRouter which when tested isolated can't get the redux so we have to explicitly provide it to the header componet here.
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const cartItems = screen.getByText("Cart - (0 items)");

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

it("should simply check if cart is rendered onto the DOM or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/); // That's how you can provide regex.

  expect(cart).toBeInTheDocument();
});

it("should check if onclick, Sign in button is changed to Sign out or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const signInButton = screen.getByText("Sign in");

  //expect(signInButton).toBeInTheDocument();

  fireEvent.click(signInButton);       // That's how you simulate an event happening in test files using fireEvent function.

  const signOutButton = screen.getByText("Sign out"); // getByText, getByRole all are part of "@testing-library/js-dom".

  expect(signOutButton).toBeInTheDocument();

});
