import { render, screen } from "@testing-library/react";
import { petStoreMocked } from "../../mocks/PetStoreMock";
import Header from "./Header";

const { info: mockInfo } = petStoreMocked;

test("should render Header component with title", () => {
  render(<Header info={mockInfo} />);

  const header = screen.getByText(`${mockInfo.title} ${mockInfo.version}`);

  expect(header).toBeInTheDocument();
});
