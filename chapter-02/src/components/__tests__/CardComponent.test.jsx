import { render, screen} from "@testing-library/react";
import CardComponent from "../CardComponent";
import MOCK_DATA from "../mocks/CardComponentMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../CardComponent";

test("should render card component with props data", () => {

    render(<CardComponent resdata={MOCK_DATA}/>);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();

});

test("should render a higher order component in DOM", () => {

    const HighOrderComp = withPromotedLabel(CardComponent); // here you're getting another component from HOC, so make sure to start it with Capital letter.(HighOrderComp)

    render(<HighOrderComp resdata={MOCK_DATA}/>);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();

});