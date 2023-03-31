import { Tag } from "../models/PetStore";

export const convertTags = (tags: Tag[]): string[] =>
  tags.map((tag) => tag.name);
