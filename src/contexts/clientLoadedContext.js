import { createContext } from 'react';

const clientLoadedContext = createContext({
  clientIsLoaded: false,
  toggleClientIsLoaded: function (clientLoadedBool) {
    this.clientIsLoaded = clientLoadedBool;
  },
});

export const ClientLoadedContextProvider = clientLoadedContext.Provider;
export const ClientLoadedContextConsumer = clientLoadedContext.Consumer;

export default clientLoadedContext;
