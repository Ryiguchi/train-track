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

export type AddGroupInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddWorkoutInput = {
  date: Scalars['String']['input'];
  exerciseId: Scalars['Int']['input'];
  sets: Array<SetInput>;
};

export type DeletedExercise = {
  __typename?: 'DeletedExercise';
  groupId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
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
};

export type ExerciseDataWithId = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
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
  addGroup: Group;
  addScheduleDay?: Maybe<Schedule>;
  addWorkout?: Maybe<Workout>;
  deleteExercise?: Maybe<DeletedExercise>;
  deleteGroup: Group;
  deleteWorkout?: Maybe<DeletedWorkout>;
  updateEmail: User;
  updateExercise?: Maybe<Exercise>;
  updateGroup: Group;
  updateName: User;
  updatePassword: User;
  updateScheduleDay?: Maybe<Schedule>;
};


export type MutationAddExerciseArgs = {
  exerciseData: ExerciseData;
};


export type MutationAddGroupArgs = {
  addGroupData: AddGroupInput;
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
  id: Scalars['Int']['input'];
};


export type MutationDeleteWorkoutArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateEmailArgs = {
  updateEmailInput: UpdateEmailInput;
};


export type MutationUpdateExerciseArgs = {
  fieldsToUpdate: ExerciseDataWithId;
};


export type MutationUpdateGroupArgs = {
  updateGroupData: UpdateGroupInput;
};


export type MutationUpdateNameArgs = {
  name: Scalars['String']['input'];
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
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
  userById: User;
  workoutsByUserId?: Maybe<Array<Workout>>;
};


export type QueryPreviousWorkoutArgs = {
  exerciseId: Scalars['Int']['input'];
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

export type UpdateEmailInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateGroupInput = {
  color: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateScheduleInput = {
  groupId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Workout = {
  __typename?: 'Workout';
  date: Scalars['String']['output'];
  exercise: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  sets: Array<Set>;
  totalReps: Scalars['Int']['output'];
  totalWeight: Scalars['Int']['output'];
};

export type ExercisesAndGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExercisesAndGroupsQuery = { __typename?: 'Query', isTodaysGroupSet?: boolean | null, exercises: Array<{ __typename?: 'Exercise', id: number, name: string, slug: string, group: { __typename?: 'Group', name: string, color: string, id: number } }>, groups?: Array<{ __typename?: 'Group', id: number, name: string, color: string }> | null };

export type PreviousWorkoutQueryVariables = Exact<{
  exerciseId: Scalars['Int']['input'];
}>;


export type PreviousWorkoutQuery = { __typename?: 'Query', previousWorkout?: { __typename?: 'Workout', id: number, date: string, exercise: string, totalWeight: number, totalReps: number, sets: Array<{ __typename?: 'Set', id: string, setNum: number, weight: number, reps: number }> } | null };

export type WorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkoutsQuery = { __typename?: 'Query', workouts?: Array<{ __typename?: 'Workout', id: number, date: string, exercise: string, totalWeight: number, totalReps: number, sets: Array<{ __typename?: 'Set', id: string, setNum: number, weight: number, reps: number }> }> | null };

export type ScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type ScheduleQuery = { __typename?: 'Query', schedule?: Array<{ __typename?: 'Schedule', id: number, date: string, group: { __typename?: 'Group', name: string, color: string, id: number } }> | null };

export type AddExerciseMutationVariables = Exact<{
  exerciseData: ExerciseData;
}>;


export type AddExerciseMutation = { __typename?: 'Mutation', addExercise?: { __typename?: 'Exercise', id: number, name: string, slug: string, group: { __typename?: 'Group', name: string, color: string, id: number } } | null };

export type UpdateExerciseMutationVariables = Exact<{
  exerciseData: ExerciseDataWithId;
}>;


export type UpdateExerciseMutation = { __typename?: 'Mutation', updateExercise?: { __typename?: 'Exercise', id: number, name: string, slug: string, group: { __typename?: 'Group', name: string, color: string, id: number } } | null };

export type DeleteExerciseMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteExerciseMutation = { __typename?: 'Mutation', deleteExercise?: { __typename?: 'DeletedExercise', id: number, name: string, slug: string, groupId?: number | null } | null };

export type SetTodaysGroupMutationVariables = Exact<{
  scheduleData: ScheduleInput;
}>;


export type SetTodaysGroupMutation = { __typename?: 'Mutation', addScheduleDay?: { __typename?: 'Schedule', id: number, date: string, group: { __typename?: 'Group', name: string, color: string, id: number } } | null };

export type AddWorkoutMutationVariables = Exact<{
  workoutData: AddWorkoutInput;
}>;


export type AddWorkoutMutation = { __typename?: 'Mutation', addWorkout?: { __typename?: 'Workout', id: number, date: string, exercise: string, sets: Array<{ __typename?: 'Set', id: string, setNum: number, weight: number, reps: number }> } | null };

export type AddGroupMutationVariables = Exact<{
  addGroupData: AddGroupInput;
}>;


export type AddGroupMutation = { __typename?: 'Mutation', addGroup: { __typename?: 'Group', id: number, name: string, color: string } };

export type UpdateGroupMutationVariables = Exact<{
  updateGroupData: UpdateGroupInput;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', updateGroup: { __typename?: 'Group', id: number, name: string, color: string } };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup: { __typename?: 'Group', id: number, name: string, color: string } };

export type UpdateUserNameMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type UpdateUserNameMutation = { __typename?: 'Mutation', updateName: { __typename?: 'User', id: number, name?: string | null, email?: string | null } };

export type UpdateUserEmailMutationVariables = Exact<{
  userData: UpdateEmailInput;
}>;


export type UpdateUserEmailMutation = { __typename?: 'Mutation', updateEmail: { __typename?: 'User', id: number, name?: string | null, email?: string | null } };

export type UpdateUserPasswordMutationVariables = Exact<{
  userData: UpdatePasswordInput;
}>;


export type UpdateUserPasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'User', id: number, name?: string | null, email?: string | null } };


export const ExercisesAndGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExercisesAndGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"exercises"},"name":{"kind":"Name","value":"exercisesByUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"groups"},"name":{"kind":"Name","value":"groupsByUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isTodaysGroupSet"}}]}}]} as unknown as DocumentNode<ExercisesAndGroupsQuery, ExercisesAndGroupsQueryVariables>;
export const PreviousWorkoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PreviousWorkout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exerciseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previousWorkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exerciseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exerciseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"exercise"}},{"kind":"Field","name":{"kind":"Name","value":"totalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"totalReps"}},{"kind":"Field","name":{"kind":"Name","value":"sets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"setNum"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"reps"}}]}}]}}]}}]} as unknown as DocumentNode<PreviousWorkoutQuery, PreviousWorkoutQueryVariables>;
export const WorkoutsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Workouts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"workouts"},"name":{"kind":"Name","value":"workoutsByUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"exercise"}},{"kind":"Field","name":{"kind":"Name","value":"totalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"totalReps"}},{"kind":"Field","name":{"kind":"Name","value":"sets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"setNum"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"reps"}}]}}]}}]}}]} as unknown as DocumentNode<WorkoutsQuery, WorkoutsQueryVariables>;
export const ScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Schedule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"schedule"},"name":{"kind":"Name","value":"scheduleByUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ScheduleQuery, ScheduleQueryVariables>;
export const AddExerciseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddExercise"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exerciseData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addExercise"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exerciseData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exerciseData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddExerciseMutation, AddExerciseMutationVariables>;
export const UpdateExerciseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateExercise"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exerciseData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseDataWithId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateExercise"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fieldsToUpdate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exerciseData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateExerciseMutation, UpdateExerciseMutationVariables>;
export const DeleteExerciseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteExercise"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteExercise"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}}]}}]}}]} as unknown as DocumentNode<DeleteExerciseMutation, DeleteExerciseMutationVariables>;
export const SetTodaysGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetTodaysGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addScheduleDay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scheduleData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SetTodaysGroupMutation, SetTodaysGroupMutationVariables>;
export const AddWorkoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddWorkout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workoutData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddWorkoutInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addWorkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workoutData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workoutData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"sets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"setNum"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"reps"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exercise"}}]}}]}}]} as unknown as DocumentNode<AddWorkoutMutation, AddWorkoutMutationVariables>;
export const AddGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addGroupData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addGroupData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addGroupData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<AddGroupMutation, AddGroupMutationVariables>;
export const UpdateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateGroupData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateGroupData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateGroupData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const DeleteGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const UpdateUserNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UpdateUserNameMutation, UpdateUserNameMutationVariables>;
export const UpdateUserEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UpdateUserEmailMutation, UpdateUserEmailMutationVariables>;
export const UpdateUserPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;