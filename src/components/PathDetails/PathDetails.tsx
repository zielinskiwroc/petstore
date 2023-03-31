import { ApiDetails } from "../../models/PetStore";
import PathParameters from "../PathParameters/PathParameters";
import PathResponses from "../PathResponses/PathResponses";
import "./PathDetails.css";

const PathDetails = ({ apiDetails }: { apiDetails: ApiDetails }) => {
  const { parameters, responses } = apiDetails;
  return (
    <div className="PathDetails">
      <PathParameters parameters={parameters} />
      <PathResponses responses={responses} />
    </div>
  );
};

export default PathDetails;
