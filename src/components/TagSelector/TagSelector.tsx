import { ChangeEvent, useState } from "react";
import "./TagSelector.css";

export const ALL = "all";

const TagSelector = ({
  tags,
  onTagChange,
}: {
  tags: string[];
  onTagChange: (tagName: string) => void;
}) => {
  const tagOptions: string[] = [ALL, ...tags];
  const [selectedTag, setSelectedTag] = useState(ALL);

  const handleChange = (event: ChangeEvent) => {
    const select = event.target as HTMLSelectElement;
    const tagName = select.value;

    setSelectedTag(tagName);
    onTagChange(tagName);
  };

  return (
    <label className="TagSelector">
      Select API:
      <select
        data-testid="tags"
        className="TagSelector__tags"
        value={selectedTag}
        onChange={handleChange}
      >
        {tagOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default TagSelector;
