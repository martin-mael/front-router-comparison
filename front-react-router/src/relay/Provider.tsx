import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "./environment";
import { FC, PropsWithChildren } from "react";

export const RelayProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {environment && (
        <RelayEnvironmentProvider environment={environment}>
          {children}
        </RelayEnvironmentProvider>
      )}
    </>
  );
};
