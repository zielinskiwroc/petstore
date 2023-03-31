import { render, screen } from "@testing-library/react";
import { petStoreMocked } from "../../mocks/PetStoreMock";
import Footer from "./Footer";

const { info: mockInfo } = petStoreMocked;

test("should render Footer component with contact us", () => {
  render(<Footer info={mockInfo} />);

  const footer = screen.getByText("Contact us");

  expect(footer).toBeInTheDocument();
});
