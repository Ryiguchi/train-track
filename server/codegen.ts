import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/schemas',
  generates: {
    './src/types/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  watch: true,
};

export default config;
