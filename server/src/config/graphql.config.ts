import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { createYoga } from 'graphql-yoga';

import { exerciseResolvers } from '../graphql/resolvers/exercise.resolvers';
import { groupResolvers } from '../graphql/resolvers/group.resolvers';
import { scheduleResolvers } from '../graphql/resolvers/schedule.resolvers';
import { workoutResolvers } from '../graphql/resolvers/workout.resolvers';
import { userResolvers } from '../graphql/resolvers/user.resolvers';
const typeDefs = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const schema = makeExecutableSchema({
  resolvers: [
    exerciseResolvers,
    groupResolvers,
    scheduleResolvers,
    workoutResolvers,
    userResolvers,
  ],
  typeDefs,
});

export const yoga = createYoga({ schema });
