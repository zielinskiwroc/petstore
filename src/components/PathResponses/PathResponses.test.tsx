import { render, screen } from "@testing-library/react";
import { responsesMocked } from "../../mocks/PetStoreMock";
import PathResponses from "./PathResponses";

test("should render PathResponses component with title", () => {
  render(<PathResponses responses={responsesMocked} />);

  const title = screen.getByText("Responses");

  expect(title).toBeInTheDocument();
});

test("should render PathResponses component with two responses", () => {
  render(<PathResponses responses={responsesMocked} />);

  const responses = screen.getAllByTestId("resp");

  expect(responses.length).toBe(2);
});
