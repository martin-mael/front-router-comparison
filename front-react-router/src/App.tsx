import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { RelayProvider } from "./relay/Provider";

const App = () => {
  return (
    <div>
      <RelayProvider>
        <RouterProvider router={router} />
      </RelayProvider>
    </div>
  );
};

export default App;
