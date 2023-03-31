import { render, screen } from "@testing-library/react";
import { petStoreMocked } from "../../mocks/PetStoreMock";
import PetApi from "./PetApi";

const { paths, tags } = petStoreMocked;

test("should select pet tag", () => {
  render(<PetApi paths={paths} tags={tags} />);

  const title = screen.getByText("PetStore API");

  expect(title).toBeInTheDocument();
});
