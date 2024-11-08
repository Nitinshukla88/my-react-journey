import Contact from "../Contact";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom" // This is how the whole library is imported onto the component.


describe("These are test cases of Contact page", () => {
    test("This test should show if the Contact component is loaded or not", () => {

        render(<Contact/>)
    
        // const heading = screen.getByRole("heading"); // This is for heading to be loaded onto the screen
    
        // Query
        const button = screen.getByRole("button"); // This is for button to be loaded onto the screen
    
        // Assertion
        expect(button).toBeInTheDocument(); // This line will check if my heading inside Contact component is loaded onto DOM or not.
    
    });
    
    
    test("This test should show if total number of input elements rendered onto the DOM", () => {
    
        render(<Contact/>);
    
        const input = screen.getAllByRole("textbox").length; // here textbox means input 
    
        expect(input).toBe(1);
    
    });
});

