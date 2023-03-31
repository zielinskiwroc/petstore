import { render, screen } from "@testing-library/react";
import { petStoreMocked } from "../../mocks/PetStoreMock";
import { ApiDetails, HttpMethod } from "../../models/PetStore";
import PathItem from "./PathItem";

const url = "/pet";
const method: HttpMethod = "get";
const apiDetails = petStoreMocked.paths[url][method] as ApiDetails;

test("should render PathItem component with GET method", () => {
  render(<PathItem apiDetails={apiDetails} method={method} url={url} />);

  const methodEl = screen.getByText(method.toUpperCase());

  expect(methodEl).toBeInTheDocument();
});

test("should render PathItem component with /pet url", () => {
  render(<PathItem apiDetails={apiDetails} method={method} url={url} />);

  const urlEl = screen.getByText(url);

  expect(urlEl).toBeInTheDocument();
});
