/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query ExercisesAndGroups {\n    exercises: exercisesByUserId {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet\n  }\n": types.ExercisesAndGroupsDocument,
    "\n  query PreviousWorkout($exerciseId: Int!) {\n    previousWorkout(exerciseId: $exerciseId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n": types.PreviousWorkoutDocument,
    "\n  query Workouts {\n    workouts: workoutsByUserId {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n": types.WorkoutsDocument,
    "\n  query Schedule {\n    schedule: scheduleByUserId {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.ScheduleDocument,
    "\n  mutation AddExercise($exerciseData: ExerciseData!) {\n    addExercise(exerciseData: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.AddExerciseDocument,
    "\n  mutation UpdateExercise($exerciseData: ExerciseDataWithId!) {\n    updateExercise(fieldsToUpdate: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.UpdateExerciseDocument,
    "\n  mutation DeleteExercise($id: Int!) {\n    deleteExercise(id: $id) {\n      id\n      name\n      slug\n      groupId\n    }\n  }\n": types.DeleteExerciseDocument,
    "\n  mutation SetTodaysGroup($scheduleData: ScheduleInput!) {\n    addScheduleDay(scheduleData: $scheduleData) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.SetTodaysGroupDocument,
    "\n  mutation AddWorkout($workoutData: AddWorkoutInput!) {\n    addWorkout(workoutData: $workoutData) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n": types.AddWorkoutDocument,
    "\n  mutation AddGroup($addGroupData: AddGroupInput!) {\n    addGroup(addGroupData: $addGroupData) {\n      id\n      name\n      color\n    }\n  }\n": types.AddGroupDocument,
    "\n  mutation UpdateGroup($updateGroupData: UpdateGroupInput!) {\n    updateGroup(updateGroupData: $updateGroupData) {\n      id\n      name\n      color\n    }\n  }\n": types.UpdateGroupDocument,
    "\n  mutation DeleteGroup($id: Int!) {\n    deleteGroup(id: $id) {\n      id\n      name\n      color\n    }\n  }\n": types.DeleteGroupDocument,
    "\n  mutation UpdateUserName($name: String!) {\n    updateName(name: $name) {\n      id\n      name\n      email\n    }\n  }\n": types.UpdateUserNameDocument,
    "\n  mutation UpdateUserEmail($userData: UpdateEmailInput!) {\n    updateEmail(updateEmailInput: $userData) {\n      id\n      name\n      email\n    }\n  }\n": types.UpdateUserEmailDocument,
    "\n  mutation UpdateUserPassword($userData: UpdatePasswordInput!) {\n    updatePassword(updatePasswordInput: $userData) {\n      id\n      name\n      email\n    }\n  }\n": types.UpdateUserPasswordDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ExercisesAndGroups {\n    exercises: exercisesByUserId {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet\n  }\n"): (typeof documents)["\n  query ExercisesAndGroups {\n    exercises: exercisesByUserId {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PreviousWorkout($exerciseId: Int!) {\n    previousWorkout(exerciseId: $exerciseId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"): (typeof documents)["\n  query PreviousWorkout($exerciseId: Int!) {\n    previousWorkout(exerciseId: $exerciseId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Workouts {\n    workouts: workoutsByUserId {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"): (typeof documents)["\n  query Workouts {\n    workouts: workoutsByUserId {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Schedule {\n    schedule: scheduleByUserId {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Schedule {\n    schedule: scheduleByUserId {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddExercise($exerciseData: ExerciseData!) {\n    addExercise(exerciseData: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddExercise($exerciseData: ExerciseData!) {\n    addExercise(exerciseData: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateExercise($exerciseData: ExerciseDataWithId!) {\n    updateExercise(fieldsToUpdate: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateExercise($exerciseData: ExerciseDataWithId!) {\n    updateExercise(fieldsToUpdate: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteExercise($id: Int!) {\n    deleteExercise(id: $id) {\n      id\n      name\n      slug\n      groupId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteExercise($id: Int!) {\n    deleteExercise(id: $id) {\n      id\n      name\n      slug\n      groupId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetTodaysGroup($scheduleData: ScheduleInput!) {\n    addScheduleDay(scheduleData: $scheduleData) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SetTodaysGroup($scheduleData: ScheduleInput!) {\n    addScheduleDay(scheduleData: $scheduleData) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddWorkout($workoutData: AddWorkoutInput!) {\n    addWorkout(workoutData: $workoutData) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n"): (typeof documents)["\n  mutation AddWorkout($workoutData: AddWorkoutInput!) {\n    addWorkout(workoutData: $workoutData) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddGroup($addGroupData: AddGroupInput!) {\n    addGroup(addGroupData: $addGroupData) {\n      id\n      name\n      color\n    }\n  }\n"): (typeof documents)["\n  mutation AddGroup($addGroupData: AddGroupInput!) {\n    addGroup(addGroupData: $addGroupData) {\n      id\n      name\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateGroup($updateGroupData: UpdateGroupInput!) {\n    updateGroup(updateGroupData: $updateGroupData) {\n      id\n      name\n      color\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateGroup($updateGroupData: UpdateGroupInput!) {\n    updateGroup(updateGroupData: $updateGroupData) {\n      id\n      name\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteGroup($id: Int!) {\n    deleteGroup(id: $id) {\n      id\n      name\n      color\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteGroup($id: Int!) {\n    deleteGroup(id: $id) {\n      id\n      name\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserName($name: String!) {\n    updateName(name: $name) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserName($name: String!) {\n    updateName(name: $name) {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserEmail($userData: UpdateEmailInput!) {\n    updateEmail(updateEmailInput: $userData) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserEmail($userData: UpdateEmailInput!) {\n    updateEmail(updateEmailInput: $userData) {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserPassword($userData: UpdatePasswordInput!) {\n    updatePassword(updatePasswordInput: $userData) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserPassword($userData: UpdatePasswordInput!) {\n    updatePassword(updatePasswordInput: $userData) {\n      id\n      name\n      email\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;