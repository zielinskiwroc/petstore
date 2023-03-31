import { render, screen } from "@testing-library/react";
import { petStoreMocked } from "../../mocks/PetStoreMock";
import { convertTags } from "../../utils/Utils";
import PathList from "./PathList";

const { tags, paths } = petStoreMocked;
const mockTags = convertTags(tags);

test("should render PathList component with three tags", () => {
  render(<PathList tags={mockTags} paths={paths} />);

  const tags = screen.getAllByTestId("tag");

  expect(tags.length).toBe(3);
});

test("should render PathList component with one path", () => {
  render(<PathList tags={mockTags} paths={paths} />);

  const pathItems = screen.getAllByTestId("path-item");

  expect(pathItems.length).toBe(1);
});
