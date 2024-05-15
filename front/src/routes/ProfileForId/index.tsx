import { useParams } from "react-router-dom";

export const ProfileForId = () => {
  const { id } = useParams();
  return <div>ProfileForId: {id}</div>;
};
