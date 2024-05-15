import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { useRelayEnvironment } from "react-relay";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  context: {
    relayEnvironment: null!,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  const relayEnvironment = useRelayEnvironment();
  if (!relayEnvironment) {
    throw new Error(
      "Relay environment not found, cannot proceed to render the app."
    );
  }
  return <RouterProvider router={router} context={{ relayEnvironment }} />;
};

export default App;
