import React from "react";
import { NextRouter } from "next/dist/client/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";

interface Props {
  router?: Partial<NextRouter>;
}

export const MockedRouter: React.FC<Props> = ({ children, router }) => {
  const mockedRouter: NextRouter = {
    basePath: "",
    route: "",
    pathname: "",
    query: {},
    asPath: "",
    push: async () => true,
    replace: async () => true,
    reload: () => null,
    back: () => null,
    prefetch: async () => undefined,
    beforePopState: () => null,
    events: {
      on: () => null,
      off: () => null,
      emit: () => null
    },
    isLocaleDomain: false,
    isFallback: true,
    isReady: true,
    isPreview: true,
    ...router
  };

  return (
    <RouterContext.Provider value={mockedRouter}>
      {children}
    </RouterContext.Provider>
  );
};
