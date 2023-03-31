import { Responses } from "../../models/PetStore";
import "./PathResponses.css";

const PathResponses = ({ responses }: { responses: Responses }) => {
  const responsesArray = Object.entries(responses);

  return (
    <div className="PathResponses">
      <h2>Responses</h2>
      <table className="PathResponses__table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {responsesArray.map(([code, response], index) => (
            <tr key={index} data-testid="resp">
              <td className="PathResponses__code">{code}</td>
              <td className="PathResponses__desc">{response.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PathResponses;
