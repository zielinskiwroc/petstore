import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

test("should render Loader component", () => {
  render(<Loader />);

  const loader = screen.getByText("Loading...");

  expect(loader).toBeInTheDocument();
});
