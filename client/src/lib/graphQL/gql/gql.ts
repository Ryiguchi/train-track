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
    "\n  query ExercisesAndGroups($userId: Int!) {\n    exercises: exercisesByUserId(userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId(userId: $userId) {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet\n  }\n": types.ExercisesAndGroupsDocument,
    "\n  query PreviousWorkout($exerciseId: Int!) {\n    previousWorkout(exerciseId: $exerciseId) {\n      id\n      date\n      exercise\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n": types.PreviousWorkoutDocument,
    "\n  query Workouts($userId: Int!) {\n    workouts: workoutsByUserId(userId: $userId) {\n      id\n      date\n      exercise\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n": types.WorkoutsDocument,
    "\n  query Schedule($userId: Int!) {\n    schedule: scheduleByUserId(userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.ScheduleDocument,
    "\n  mutation AddExercise($exerciseData: ExerciseData!) {\n    addExercise(exerciseData: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.AddExerciseDocument,
    "\n  mutation SetTodaysGroup($scheduleData: ScheduleInput!) {\n    addScheduleDay(scheduleData: $scheduleData) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.SetTodaysGroupDocument,
    "\n  mutation AddWorkout($workoutData: AddWorkoutInput!) {\n    addWorkout(workoutData: $workoutData) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n": types.AddWorkoutDocument,
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
export function graphql(source: "\n  query ExercisesAndGroups($userId: Int!) {\n    exercises: exercisesByUserId(userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId(userId: $userId) {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet\n  }\n"): (typeof documents)["\n  query ExercisesAndGroups($userId: Int!) {\n    exercises: exercisesByUserId(userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId(userId: $userId) {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PreviousWorkout($exerciseId: Int!) {\n    previousWorkout(exerciseId: $exerciseId) {\n      id\n      date\n      exercise\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"): (typeof documents)["\n  query PreviousWorkout($exerciseId: Int!) {\n    previousWorkout(exerciseId: $exerciseId) {\n      id\n      date\n      exercise\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Workouts($userId: Int!) {\n    workouts: workoutsByUserId(userId: $userId) {\n      id\n      date\n      exercise\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"): (typeof documents)["\n  query Workouts($userId: Int!) {\n    workouts: workoutsByUserId(userId: $userId) {\n      id\n      date\n      exercise\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Schedule($userId: Int!) {\n    schedule: scheduleByUserId(userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Schedule($userId: Int!) {\n    schedule: scheduleByUserId(userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddExercise($exerciseData: ExerciseData!) {\n    addExercise(exerciseData: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddExercise($exerciseData: ExerciseData!) {\n    addExercise(exerciseData: $exerciseData) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetTodaysGroup($scheduleData: ScheduleInput!) {\n    addScheduleDay(scheduleData: $scheduleData) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SetTodaysGroup($scheduleData: ScheduleInput!) {\n    addScheduleDay(scheduleData: $scheduleData) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddWorkout($workoutData: AddWorkoutInput!) {\n    addWorkout(workoutData: $workoutData) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n"): (typeof documents)["\n  mutation AddWorkout($workoutData: AddWorkoutInput!) {\n    addWorkout(workoutData: $workoutData) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;