import { render, screen } from "@testing-library/react";
import { parametersMocked } from "../../mocks/PetStoreMock";
import PathParameters from "./PathParameters";

test("should render PathParameters component with title", () => {
  render(<PathParameters parameters={parametersMocked} />);

  const title = screen.getByText("Parameters");

  expect(title).toBeInTheDocument();
});

test("should render PathParameters component with one parameter", () => {
  render(<PathParameters parameters={parametersMocked} />);

  const parameters = screen.getAllByTestId("param");

  expect(parameters.length).toBe(1);
});
