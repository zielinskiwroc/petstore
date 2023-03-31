import { Path, Paths } from "../../models/PetStore";
import PathItem from "../PathItem/PathItem";
import "./PathList.css";

const PathList = ({ tags, paths }: { tags: string[]; paths: Paths }) => {
  const pathsArray: [string, Path][] = Object.entries(paths);

  return (
    <div className="PathList">
      {tags.map((tag) => (
        <div className="PathList__list" key={tag}>
          <h2 className="PathList__list-title" data-testid="tag">
            {tag.toUpperCase()} API
          </h2>
          <ul className="PathList__list-body">
            {pathsArray
              .filter(([method]) => method.startsWith(`/${tag}`))
              .map(([url, path], index) => {
                return Object.entries(path).map(([method, apiDetails]) => (
                  <li key={`${method}-${index}`} data-testid="path-item">
                    <PathItem
                      method={method}
                      url={url}
                      apiDetails={apiDetails}
                    />
                  </li>
                ));
              })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PathList;
