import {
  cacheExchange,
  fetchExchange,
  type ClientOptions,
  Client,
} from '@urql/vue';

export const urqlClientOptions: ClientOptions = {
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    credentials: 'include',
  },
};

export const urqlClient = new Client(urqlClientOptions);
