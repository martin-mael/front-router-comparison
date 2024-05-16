import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../../router/types";
import { homeLoader } from "./loader";

const Home = () => {
  const { greetings } = useLoaderData() as LoaderData<typeof homeLoader>;

  return <div>Bienvenue {greetings?.greetings}</div>;
};

export default Home;
