import type { CodegenConfig } from '@graphql-codegen/cli';

const graphQlUrl = `${process.env.VUE_APP_BASE_URL}/graphql`;

const config: CodegenConfig = {
  schema: graphQlUrl,
  documents: ['src/**/*.vue'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
      plugins: [],
    },
  },
};

export default config;
