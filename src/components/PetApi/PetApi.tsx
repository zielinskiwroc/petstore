import { useState } from "react";
import { Paths, Tag } from "../../models/PetStore";
import { convertTags } from "../../utils/Utils";
import PathList from "../PathList/PathList";
import TagSelector, { ALL } from "../TagSelector/TagSelector";
import "./PetApi.css";

const PetApi = ({ paths, tags }: { paths: Paths; tags: Tag[] }) => {
  const allTags: string[] = convertTags(tags);

  const [filteredTags, setFilteredTags] = useState(allTags);

  const filterTagsByName = (tagName: string): void => {
    if (tagName === ALL) {
      setFilteredTags(allTags);
    } else {
      setFilteredTags([tagName]);
    }
  };

  const handleTagChange = (tagName: string) => {
    filterTagsByName(tagName);
  };

  return (
    <div className="PetApi">
      <h1 className="PetApi__text">PetStore API</h1>
      <TagSelector tags={allTags} onTagChange={handleTagChange} />
      <PathList tags={filteredTags} paths={paths} />
    </div>
  );
};

export default PetApi;
