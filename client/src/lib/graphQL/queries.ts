import { graphql } from '@/lib/graphQL/gql';

//QUERIES

export const EXERCISES_AND_GROUPS_QUERY = graphql(/* GraphQL */ `
  query ExercisesAndGroups($userId: Int!) {
    exercises: exercisesByUserId(userId: $userId) {
      id
      name
      slug
      group {
        name
        color
        id
      }
    }

    groups: groupsByUserId(userId: $userId) {
      id
      name
      color
    }

    isTodaysGroupSet(userId: $userId)
  }
`);

export const PREVIOUS_WORKOUT_QUERY = graphql(`
  query PreviousWorkout($exerciseId: Int!, $userId: Int!) {
    previousWorkout(exerciseId: $exerciseId, userId: $userId) {
      id
      date
      exercise
      totalWeight
      totalReps
      sets {
        id
        setNum
        weight
        reps
      }
    }
  }
`);

export const WORKOUTS_QUERY = graphql(`
  query Workouts($userId: Int!) {
    workouts: workoutsByUserId(userId: $userId) {
      id
      date
      exercise
      totalWeight
      totalReps
      sets {
        id
        setNum
        weight
        reps
      }
    }
  }
`);

export const SCHEDULE_QUERY = graphql(`
  query Schedule($userId: Int!) {
    schedule: scheduleByUserId(userId: $userId) {
      id
      date
      group {
        name
        color
        id
      }
    }
  }
`);

// MUTATIONS

export const ADD_EXERCISE = graphql(`
  mutation AddExercise($addExerciseData: AddExerciseInput!, $userId: Int!) {
    addExercise(addExerciseData: $addExerciseData, userId: $userId) {
      id
      name
      slug
      group {
        name
        color
        id
      }
    }
  }
`);

export const UPDATE_EXERCISE = graphql(`
  mutation UpdateExercise(
    $updateExerciseData: UpdateExerciseInput!
    $userId: Int!
  ) {
    updateExercise(updateExerciseData: $updateExerciseData, userId: $userId) {
      id
      name
      slug
      group {
        name
        color
        id
      }
    }
  }
`);

export const DELETE_EXERCISE = graphql(`
  mutation DeleteExercise($id: Int!, $userId: Int!) {
    deleteExercise(id: $id, userId: $userId) {
      id
      name
      slug
      groupId
    }
  }
`);

export const SET_TODAYS_GROUP = graphql(`
  mutation SetTodaysGroup($addScheduleData: AddScheduleInput!, $userId: Int!) {
    addScheduleDay(addScheduleData: $addScheduleData, userId: $userId) {
      id
      date
      group {
        name
        color
        id
      }
    }
  }
`);

export const ADD_WORKOUT = graphql(`
  mutation AddWorkout($addWorkoutData: AddWorkoutInput!, $userId: Int!) {
    addWorkout(addWorkoutData: $addWorkoutData, userId: $userId) {
      id
      date
      sets {
        id
        setNum
        weight
        reps
      }
      exercise
    }
  }
`);

export const ADD_GROUP = graphql(`
  mutation AddGroup($addGroupData: AddGroupInput!, $userId: Int!) {
    addGroup(addGroupData: $addGroupData, userId: $userId) {
      id
      name
      color
    }
  }
`);

export const UPDATE_GROUP = graphql(`
  mutation UpdateGroup($updateGroupData: UpdateGroupInput!, $userId: Int!) {
    updateGroup(updateGroupData: $updateGroupData, userId: $userId) {
      id
      name
      color
    }
  }
`);

export const DELETE_GROUP = graphql(`
  mutation DeleteGroup($id: Int!, $userId: Int!) {
    deleteGroup(id: $id, userId: $userId) {
      id
      name
      color
    }
  }
`);

export const UPDATE_USER_NAME = graphql(`
  mutation UpdateUserName($name: String!, $userId: Int!) {
    updateName(name: $name, userId: $userId) {
      id
      name
      email
    }
  }
`);

export const UPDATE_USER_EMAIL = graphql(`
  mutation UpdateUserEmail($updateEmailData: UpdateEmailInput!, $userId: Int!) {
    updateEmail(updateEmailData: $updateEmailData, userId: $userId) {
      id
      name
      email
    }
  }
`);

export const UPDATE_USER_PASSWORD = graphql(`
  mutation UpdateUserPassword(
    $updatePasswordData: UpdatePasswordInput!
    $userId: Int!
  ) {
    updatePassword(updatePasswordData: $updatePasswordData, userId: $userId) {
      id
      name
      email
    }
  }
`);
