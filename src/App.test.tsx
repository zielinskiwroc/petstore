import { render, screen } from "@testing-library/react";
import App from "./App";
import { petStoreMocked } from "./mocks/PetStoreMock";
import { PetStore } from "./models/PetStore";

let mockPetStore: PetStore | undefined = undefined;

jest.mock("./hooks/usePetStore", () => ({
  usePetStore: () => mockPetStore,
}));

test("should render Loading component when petStore data is undefined", () => {
  render(<App />);

  const loading = screen.getByText("Loading...");

  expect(loading).toBeInTheDocument();
});

test("should render Header, PetApi and Footer components when petStore data is available", () => {
  mockPetStore = petStoreMocked;

  render(<App />);

  const petApi = screen.getByText("PetStore API");

  expect(petApi).toBeInTheDocument();
});
