import { fireEvent, render, screen } from "@testing-library/react";
import { tagsMocked as tags } from "../../mocks/PetStoreMock";
import { convertTags } from "../../utils/Utils";
import TagSelector from "./TagSelector";

const handleTagChange = jest.fn();
const mockTags = convertTags(tags);
const petTag = mockTags[0];

test("should select pet tag", () => {
  render(<TagSelector tags={mockTags} onTagChange={handleTagChange} />);

  fireEvent.change(screen.getByTestId("tags"), {
    target: { value: petTag },
  });

  expect(handleTagChange).toHaveBeenCalledWith(petTag);
});
