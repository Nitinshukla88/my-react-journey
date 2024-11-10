import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuCard from "../RestaurantMenuCard";
import NEW_MOCK_DATA from "../mocks/ResMenuCardMock.json"; // This is default import 
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve(NEW_MOCK_DATA)}));

test("should verify the cart flow in our app", async () => {

    await act(async () => render(<Provider store={appStore}><RestaurantMenuCard/></Provider>));

    const accordian = screen.getByText("Dessert (4)");

    // expect(accordian).toBeInTheDocument();

    fireEvent.click(accordian);

    expect(screen.getAllByTestId("food-items").length).toBe(4);

});