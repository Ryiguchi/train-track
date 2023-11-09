import { graphQlUrl } from '@/utils/helpers/api.helpers';
import { cacheExchange, fetchExchange, type ClientOptions } from '@urql/vue';

export const urqlClientOptions: ClientOptions = {
  url: graphQlUrl,
  exchanges: [cacheExchange, fetchExchange],
};
