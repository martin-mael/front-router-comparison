import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { RelayProvider } from "./relay/Provider";
import App from "./App";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RelayProvider>
        <App />
      </RelayProvider>
    </StrictMode>
  );
}
