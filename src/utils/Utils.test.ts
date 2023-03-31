import { petStoreMocked } from "../mocks/PetStoreMock";
import { convertTags } from "./Utils";

test("should convert tags", () => {
  const convertedTags: string[] = convertTags(petStoreMocked.tags);
  const expectedTags: string[] = ["pet", "store", "user"];

  expect(convertedTags).toEqual(expectedTags);
});
