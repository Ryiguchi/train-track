import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/*.vue', 'src/lib/graphQL/queries.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/lib/graphQL/gqlCodegen/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
      plugins: [],
    },
  },
};

export default config;
