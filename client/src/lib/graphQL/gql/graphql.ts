/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddWorkoutInput = {
  date: Scalars['String']['input'];
  exerciseId: Scalars['Int']['input'];
  sets: Array<SetInput>;
  userId: Scalars['Int']['input'];
};

export type DeletedExercise = {
  __typename?: 'DeletedExercise';
  groupId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type DeletedWorkout = {
  __typename?: 'DeletedWorkout';
  date: Scalars['String']['output'];
  exerciseId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  sets: Array<Set>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Exercise = {
  __typename?: 'Exercise';
  group: Group;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ExerciseData = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type ExerciseDataOptional = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Group = {
  __typename?: 'Group';
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type GroupName = {
  __typename?: 'GroupName';
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addExercise?: Maybe<Exercise>;
  addGroup?: Maybe<Group>;
  addScheduleDay?: Maybe<Schedule>;
  addWorkout?: Maybe<Workout>;
  deleteExercise?: Maybe<DeletedExercise>;
  deleteGroup?: Maybe<Group>;
  deleteWorkout?: Maybe<DeletedWorkout>;
  updateExercise?: Maybe<Exercise>;
  updateScheduleDay?: Maybe<Schedule>;
};


export type MutationAddExerciseArgs = {
  exerciseData: ExerciseData;
};


export type MutationAddGroupArgs = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationAddScheduleDayArgs = {
  scheduleData: ScheduleInput;
};


export type MutationAddWorkoutArgs = {
  workoutData: AddWorkoutInput;
};


export type MutationDeleteExerciseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteGroupArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteWorkoutArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateExerciseArgs = {
  fieldsToUpdate: ExerciseDataOptional;
};


export type MutationUpdateScheduleDayArgs = {
  fieldsToUpdate: UpdateScheduleInput;
};

export type Query = {
  __typename?: 'Query';
  exercisesByUserId: Array<Exercise>;
  groupsByUserId?: Maybe<Array<Group>>;
  isTodaysGroupSet?: Maybe<Scalars['Boolean']['output']>;
  previousWorkout?: Maybe<Workout>;
  scheduleByUserId?: Maybe<Array<Schedule>>;
  workoutsByUserId?: Maybe<Array<Workout>>;
};


export type QueryExercisesByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGroupsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryPreviousWorkoutArgs = {
  exerciseId: Scalars['Int']['input'];
};


export type QueryScheduleByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryWorkoutsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};

export type Schedule = {
  __typename?: 'Schedule';
  date: Scalars['String']['output'];
  group: Group;
  id: Scalars['Int']['output'];
};

export type ScheduleInput = {
  date: Scalars['String']['input'];
  groupId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type Set = {
  __typename?: 'Set';
  id: Scalars['String']['output'];
  reps: Scalars['Int']['output'];
  setNum: Scalars['Int']['output'];
  weight: Scalars['Float']['output'];
};

export type SetInput = {
  id: Scalars['String']['input'];
  reps: Scalars['Int']['input'];
  setNum: Scalars['Int']['input'];
  weight: Scalars['Float']['input'];
};

export type UpdateScheduleInput = {
  groupId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Workout = {
  __typename?: 'Workout';
  date: Scalars['String']['output'];
  exercise: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  sets: Array<Set>;
};

export type ExercisesAndGroupsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type ExercisesAndGroupsQuery = { __typename?: 'Query', isTodaysGroupSet?: boolean | null, exercises: Array<{ __typename?: 'Exercise', id: number, name: string, slug: string, group: { __typename?: 'Group', name: string, color: string, id: number } }>, groups?: Array<{ __typename?: 'Group', id: number, name: string, color: string }> | null };

export type PreviousWorkoutQueryVariables = Exact<{
  exerciseId: Scalars['Int']['input'];
}>;


export type PreviousWorkoutQuery = { __typename?: 'Query', previousWorkout?: { __typename?: 'Workout', id: number, date: string, exercise: string, sets: Array<{ __typename?: 'Set', id: string, setNum: number, weight: number, reps: number }> } | null };

export type WorkoutsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type WorkoutsQuery = { __typename?: 'Query', workouts?: Array<{ __typename?: 'Workout', id: number, date: string, exercise: string, sets: Array<{ __typename?: 'Set', id: string, setNum: number, weight: number, reps: number }> }> | null };

export type ScheduleQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type ScheduleQuery = { __typename?: 'Query', schedule?: Array<{ __typename?: 'Schedule', id: number, date: string, group: { __typename?: 'Group', name: string, color: string, id: number } }> | null };

export type AddExerciseMutationVariables = Exact<{
  exerciseData: ExerciseData;
}>;


export type AddExerciseMutation = { __typename?: 'Mutation', addExercise?: { __typename?: 'Exercise', id: number, name: string, slug: string, group: { __typename?: 'Group', name: string, color: string, id: number } } | null };

export type SetTodaysGroupMutationVariables = Exact<{
  scheduleData: ScheduleInput;
}>;


export type SetTodaysGroupMutation = { __typename?: 'Mutation', addScheduleDay?: { __typename?: 'Schedule', id: number, date: string, group: { __typename?: 'Group', name: string, color: string, id: number } } | null };

export type AddWorkoutMutationVariables = Exact<{
  workoutData: AddWorkoutInput;
}>;


export type AddWorkoutMutation = { __typename?: 'Mutation', addWorkout?: { __typename?: 'Workout', id: number, date: string, exercise: string, sets: Array<{ __typename?: 'Set', id: string, setNum: number, weight: number, reps: number }> } | null };


export const ExercisesAndGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExercisesAndGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"exercises"},"name":{"kind":"Name","value":"exercisesByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"groups"},"name":{"kind":"Name","value":"groupsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isTodaysGroupSet"}}]}}]} as unknown as DocumentNode<ExercisesAndGroupsQuery, ExercisesAndGroupsQueryVariables>;
export const PreviousWorkoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PreviousWorkout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exerciseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previousWorkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exerciseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exerciseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"exercise"}},{"kind":"Field","name":{"kind":"Name","value":"sets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"setNum"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"reps"}}]}}]}}]}}]} as unknown as DocumentNode<PreviousWorkoutQuery, PreviousWorkoutQueryVariables>;
export const WorkoutsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Workouts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"workouts"},"name":{"kind":"Name","value":"workoutsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"exercise"}},{"kind":"Field","name":{"kind":"Name","value":"sets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"setNum"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"reps"}}]}}]}}]}}]} as unknown as DocumentNode<WorkoutsQuery, WorkoutsQueryVariables>;
export const ScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Schedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"schedule"},"name":{"kind":"Name","value":"scheduleByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ScheduleQuery, ScheduleQueryVariables>;
export const AddExerciseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddExercise"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exerciseData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addExercise"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exerciseData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exerciseData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddExerciseMutation, AddExerciseMutationVariables>;
export const SetTodaysGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetTodaysGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addScheduleDay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scheduleData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SetTodaysGroupMutation, SetTodaysGroupMutationVariables>;
export const AddWorkoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddWorkout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workoutData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddWorkoutInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addWorkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workoutData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workoutData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"sets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"setNum"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"reps"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exercise"}}]}}]}}]} as unknown as DocumentNode<AddWorkoutMutation, AddWorkoutMutationVariables>;