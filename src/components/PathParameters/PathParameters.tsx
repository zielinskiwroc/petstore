import { Parameter } from "../../models/PetStore";
import "./PathParameters.css";

const PathParameters = ({ parameters }: { parameters: Parameter[] }) => {
  return (
    <div className="PathParameters">
      <h2>Parameters</h2>
      <table className="PathParameters__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) => (
            <tr key={index} data-testid="param">
              <td className="PathParameters__name">
                <span className="PathParameters__name-text">{param.name}</span>
                {param.required ? (
                  <sup className="PathParameters__name-required">required</sup>
                ) : (
                  ""
                )}
              </td>
              <td className="PathParameters__desc">{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PathParameters;
