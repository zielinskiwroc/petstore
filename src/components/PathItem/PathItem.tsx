import { useState } from "react";
import { ApiDetails } from "../../models/PetStore";
import PathDetails from "../PathDetails/PathDetails";
import "./PathItem.css";

const PathItem = ({
  method,
  url,
  apiDetails,
}: {
  method: string;
  url: string;
  apiDetails: ApiDetails;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`PathItem PathItem--${method}`}>
      <div className="PathItem__title" onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`PathItem__title-method PathItem__title-method--${method}`}
        >
          {method.toUpperCase()}
        </span>
        <span className="PathItem__title-path">{url}</span>
        <span className="PathItem__title-button"> {isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div>
          <PathDetails apiDetails={apiDetails} />
        </div>
      )}
    </div>
  );
};

export default PathItem;
