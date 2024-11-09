import { render, screen} from "@testing-library/react";
import CardComponent from "../CardComponent";
import MOCK_DATA from "../mocks/CardComponentMock.json";
import "@testing-library/jest-dom";

test("should render card component with props data", () => {

    render(<CardComponent resdata={MOCK_DATA}/>);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();

});