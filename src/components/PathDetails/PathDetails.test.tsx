import { render, screen } from "@testing-library/react";
import { petStoreMocked } from "../../mocks/PetStoreMock";
import { ApiDetails } from "../../models/PetStore";
import PathDetails from "./PathDetails";

const apiDetails = petStoreMocked.paths["/pet"].get as ApiDetails;

test("should render PathDetails component with parameters and responses", () => {
  render(<PathDetails apiDetails={apiDetails} />);

  const parameters = screen.getByText("Parameters");
  const responses = screen.getByText("Responses");

  expect(parameters).toBeInTheDocument();
  expect(responses).toBeInTheDocument();
});
