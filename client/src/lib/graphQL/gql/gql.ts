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
    "\n  query ExercisesAndGroups($userId: Int!) {\n    exercises: exercisesByUserId(userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId(userId: $userId) {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet(userId: $userId)\n  }\n": types.ExercisesAndGroupsDocument,
    "\n  query PreviousWorkout($exerciseId: Int!, $userId: Int!) {\n    previousWorkout(exerciseId: $exerciseId, userId: $userId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n": types.PreviousWorkoutDocument,
    "\n  query Workouts($userId: Int!) {\n    workouts: workoutsByUserId(userId: $userId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n": types.WorkoutsDocument,
    "\n  query Schedule($userId: Int!) {\n    schedule: scheduleByUserId(userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.ScheduleDocument,
    "\n  mutation AddExercise($addExerciseData: AddExerciseInput!, $userId: Int!) {\n    addExercise(addExerciseData: $addExerciseData, userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.AddExerciseDocument,
    "\n  mutation UpdateExercise(\n    $updateExerciseData: UpdateExerciseInput!\n    $userId: Int!\n  ) {\n    updateExercise(updateExerciseData: $updateExerciseData, userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.UpdateExerciseDocument,
    "\n  mutation DeleteExercise($id: Int!, $userId: Int!) {\n    deleteExercise(id: $id, userId: $userId) {\n      id\n      name\n      slug\n      groupId\n    }\n  }\n": types.DeleteExerciseDocument,
    "\n  mutation SetTodaysGroup($addScheduleData: AddScheduleInput!, $userId: Int!) {\n    addScheduleDay(addScheduleData: $addScheduleData, userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n": types.SetTodaysGroupDocument,
    "\n  mutation AddWorkout($addWorkoutData: AddWorkoutInput!, $userId: Int!) {\n    addWorkout(addWorkoutData: $addWorkoutData, userId: $userId) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n": types.AddWorkoutDocument,
    "\n  mutation AddGroup($addGroupData: AddGroupInput!, $userId: Int!) {\n    addGroup(addGroupData: $addGroupData, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n": types.AddGroupDocument,
    "\n  mutation UpdateGroup($updateGroupData: UpdateGroupInput!, $userId: Int!) {\n    updateGroup(updateGroupData: $updateGroupData, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n": types.UpdateGroupDocument,
    "\n  mutation DeleteGroup($id: Int!, $userId: Int!) {\n    deleteGroup(id: $id, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n": types.DeleteGroupDocument,
    "\n  mutation UpdateUserName($name: String!, $userId: Int!) {\n    updateName(name: $name, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n": types.UpdateUserNameDocument,
    "\n  mutation UpdateUserEmail($updateEmailData: UpdateEmailInput!, $userId: Int!) {\n    updateEmail(updateEmailData: $updateEmailData, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n": types.UpdateUserEmailDocument,
    "\n  mutation UpdateUserPassword(\n    $updatePasswordData: UpdatePasswordInput!\n    $userId: Int!\n  ) {\n    updatePassword(updatePasswordData: $updatePasswordData, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n": types.UpdateUserPasswordDocument,
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
export function graphql(source: "\n  query ExercisesAndGroups($userId: Int!) {\n    exercises: exercisesByUserId(userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId(userId: $userId) {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet(userId: $userId)\n  }\n"): (typeof documents)["\n  query ExercisesAndGroups($userId: Int!) {\n    exercises: exercisesByUserId(userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n\n    groups: groupsByUserId(userId: $userId) {\n      id\n      name\n      color\n    }\n\n    isTodaysGroupSet(userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PreviousWorkout($exerciseId: Int!, $userId: Int!) {\n    previousWorkout(exerciseId: $exerciseId, userId: $userId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"): (typeof documents)["\n  query PreviousWorkout($exerciseId: Int!, $userId: Int!) {\n    previousWorkout(exerciseId: $exerciseId, userId: $userId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Workouts($userId: Int!) {\n    workouts: workoutsByUserId(userId: $userId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"): (typeof documents)["\n  query Workouts($userId: Int!) {\n    workouts: workoutsByUserId(userId: $userId) {\n      id\n      date\n      exercise\n      totalWeight\n      totalReps\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Schedule($userId: Int!) {\n    schedule: scheduleByUserId(userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Schedule($userId: Int!) {\n    schedule: scheduleByUserId(userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddExercise($addExerciseData: AddExerciseInput!, $userId: Int!) {\n    addExercise(addExerciseData: $addExerciseData, userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddExercise($addExerciseData: AddExerciseInput!, $userId: Int!) {\n    addExercise(addExerciseData: $addExerciseData, userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateExercise(\n    $updateExerciseData: UpdateExerciseInput!\n    $userId: Int!\n  ) {\n    updateExercise(updateExerciseData: $updateExerciseData, userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateExercise(\n    $updateExerciseData: UpdateExerciseInput!\n    $userId: Int!\n  ) {\n    updateExercise(updateExerciseData: $updateExerciseData, userId: $userId) {\n      id\n      name\n      slug\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteExercise($id: Int!, $userId: Int!) {\n    deleteExercise(id: $id, userId: $userId) {\n      id\n      name\n      slug\n      groupId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteExercise($id: Int!, $userId: Int!) {\n    deleteExercise(id: $id, userId: $userId) {\n      id\n      name\n      slug\n      groupId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetTodaysGroup($addScheduleData: AddScheduleInput!, $userId: Int!) {\n    addScheduleDay(addScheduleData: $addScheduleData, userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SetTodaysGroup($addScheduleData: AddScheduleInput!, $userId: Int!) {\n    addScheduleDay(addScheduleData: $addScheduleData, userId: $userId) {\n      id\n      date\n      group {\n        name\n        color\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddWorkout($addWorkoutData: AddWorkoutInput!, $userId: Int!) {\n    addWorkout(addWorkoutData: $addWorkoutData, userId: $userId) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n"): (typeof documents)["\n  mutation AddWorkout($addWorkoutData: AddWorkoutInput!, $userId: Int!) {\n    addWorkout(addWorkoutData: $addWorkoutData, userId: $userId) {\n      id\n      date\n      sets {\n        id\n        setNum\n        weight\n        reps\n      }\n      exercise\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddGroup($addGroupData: AddGroupInput!, $userId: Int!) {\n    addGroup(addGroupData: $addGroupData, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n"): (typeof documents)["\n  mutation AddGroup($addGroupData: AddGroupInput!, $userId: Int!) {\n    addGroup(addGroupData: $addGroupData, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateGroup($updateGroupData: UpdateGroupInput!, $userId: Int!) {\n    updateGroup(updateGroupData: $updateGroupData, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateGroup($updateGroupData: UpdateGroupInput!, $userId: Int!) {\n    updateGroup(updateGroupData: $updateGroupData, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteGroup($id: Int!, $userId: Int!) {\n    deleteGroup(id: $id, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteGroup($id: Int!, $userId: Int!) {\n    deleteGroup(id: $id, userId: $userId) {\n      id\n      name\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserName($name: String!, $userId: Int!) {\n    updateName(name: $name, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserName($name: String!, $userId: Int!) {\n    updateName(name: $name, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserEmail($updateEmailData: UpdateEmailInput!, $userId: Int!) {\n    updateEmail(updateEmailData: $updateEmailData, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserEmail($updateEmailData: UpdateEmailInput!, $userId: Int!) {\n    updateEmail(updateEmailData: $updateEmailData, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserPassword(\n    $updatePasswordData: UpdatePasswordInput!\n    $userId: Int!\n  ) {\n    updatePassword(updatePasswordData: $updatePasswordData, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserPassword(\n    $updatePasswordData: UpdatePasswordInput!\n    $userId: Int!\n  ) {\n    updatePassword(updatePasswordData: $updatePasswordData, userId: $userId) {\n      id\n      name\n      email\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;