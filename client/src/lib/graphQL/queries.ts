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

    isTodaysGroupSet
  }
`);

export const PREVIOUS_WORKOUT_QUERY = graphql(`
  query PreviousWorkout($exerciseId: Int!) {
    previousWorkout(exerciseId: $exerciseId) {
      id
      date
      exercise
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
      sets {
        id
        setNum
        weight
        reps
      }
    }
  }
`);

export const SCEDULE_QUERY = graphql(`
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
  mutation AddExercise($exerciseData: ExerciseData!) {
    addExercise(exerciseData: $exerciseData) {
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

export const SET_TODAYS_GROUP = graphql(`
  mutation SetTodaysGroup($scheduleData: ScheduleInput!) {
    addScheduleDay(scheduleData: $scheduleData) {
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
  mutation AddWorkout($workoutData: AddWorkoutInput!) {
    addWorkout(workoutData: $workoutData) {
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
